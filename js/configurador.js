const API_BASE_URL = window.location.hostname === 'heliogabalo.github.io'
	? 'https://heliogabalo.github.io'
	: 'http://192.168.122.27';

// Sample component data
const components = {
  cpus: [
    { id: 1, name: "Intel Core i9-13900K", price: 649, cores: 24, socket: "LGA1700", img: "../images/cpu-intel.jpg" },
    { id: 2, name: "AMD Ryzen 9 7950X", price: 699, cores: 16, socket: "AM5", img: "../images/cpu-amd.jpg" }
  ],
  gpus: [
    { id: 1, name: "NVIDIA RTX 4090", price: 1599, vram: 24, power: 450, img: "../images/gpu-nvidia.jpg" },
    { id: 2, name: "AMD RX 7900 XTX", price: 999, vram: 24, power: 355, img: "../images/gpu-amd.jpg" }
  ]
  // More components would be added here
};

// Current configuration
let currentConfig = {
  cpu: null,
  gpu: null,
  // More components would be tracked here
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  loadComponents();
  updateBuildSummary();
});

// Load components into the UI
function loadComponents() {
  // Load CPUs
  const cpuList = document.getElementById('cpu-list');
  components.cpus.forEach(cpu => {
    cpuList.appendChild(createComponentCard(cpu, 'cpu'));
  });

  // Load GPUs
  const gpuList = document.getElementById('gpu-list');
  components.gpus.forEach(gpu => {
    gpuList.appendChild(createComponentCard(gpu, 'gpu'));
  });
}

// Create a component card
function createComponentCard(component, type) {
  const col = document.createElement('div');
  col.className = 'col-md-6';
  
  const card = document.createElement('div');
  card.className = 'card component-card';
  card.dataset.id = component.id;
  card.dataset.type = type;
  
  card.innerHTML = `
    <img src="${component.img || '../images/placeholder.png'}" class="card-img-top" alt="${component.name}">
    <div class="card-body">
      <h5 class="card-title">${component.name}</h5>
      <p class="card-text">${getComponentDescription(component, type)}</p>
      <div class="d-flex justify-content-between align-items-center">
        <span class="price-tag">${component.price}€</span>
        <button class="btn btn-sm btn-outline-primary select-btn">Seleccionar</button>
      </div>
    </div>
  `;
  
  // Add click event
  card.querySelector('.select-btn').addEventListener('click', function() {
    selectComponent(component, type);
  });
  
  col.appendChild(card);
  return col;
}

// Get description for a component based on its type
function getComponentDescription(component, type) {
  switch(type) {
    case 'cpu':
      return `${component.cores} núcleos | Socket ${component.socket}`;
    case 'gpu':
      return `${component.vram}GB VRAM | ${component.power}W`;
    default:
      return '';
  }
}

// Select a component
function selectComponent(component, type) {
  currentConfig[type] = component;
  updateBuildSummary();
  checkCompatibility();
}

// Update the build summary
function updateBuildSummary() {
  const summary = document.getElementById('build-summary');
  let html = '';
  let total = 0;
  
  for (const [type, component] of Object.entries(currentConfig)) {
    if (component) {
      html += `
        <div class="selected-component p-2 mb-2">
          <h6>${getComponentTypeName(type)}</h6>
          <p class="mb-1">${component.name}</p>
          <small class="text-muted">${component.price}€</small>
        </div>
      `;
      total += component.price;
    }
  }
  
  if (html === '') {
    html = '<p class="text-muted">Selecciona componentes para ver tu configuración</p>';
  }
  
  summary.innerHTML = html;
  document.getElementById('total-price').textContent = `${total}€`;
}

// Check component compatibility
function checkCompatibility() {
  const errorAlert = document.getElementById('compatibility-error');
  const successAlert = document.getElementById('compatibility-success');
  
  errorAlert.style.display = 'none';
  successAlert.style.display = 'none';
  
  // Sample compatibility checks
  if (currentConfig.cpu && currentConfig.gpu) {
    if (currentConfig.gpu.power > 350 && (!currentConfig.psu || currentConfig.psu.wattage < 750)) {
      errorAlert.innerHTML = 'Advertencia: Esta tarjeta gráfica requiere una fuente de alimentación de al menos 750W';
      errorAlert.style.display = 'block';
    } else {
      successAlert.style.display = 'block';
    }
  }
}

// Helper function to get component type name
function getComponentTypeName(type) {
  const names = {
    cpu: 'Procesador',
    gpu: 'Tarjeta Gráfica',
    motherboard: 'Placa Base',
    ram: 'Memoria RAM',
    storage: 'Almacenamiento',
    psu: 'Fuente de Alimentación',
    case: 'Caja'
  };
  return names[type] || type;
}

// Manejar formularios
// Manejo de registro
document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  console.log('Registration form submitted');
  
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
  
  console.log('Form values:', {username, email, password, passwordConfirm});
  
  if(password !== passwordConfirm) {
  	console.log('Password do not match');
    alert('Las contraseñas no coinciden');
    return;
  }
  
  try {
    const response = await fetch('${API_BASE_URL}/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });
    
    console.log('Response status:', response.status);
    
    const data = await response.json();
    console.log('Response data:', data);
    
    if(response.ok) {
      alert('Registro exitoso! Por favor inicia sesión.');
      bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    } else {
      alert(data.message || 'Error en el registro');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al conectar con el servidor');
  }
});

// Manejo de login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  try {
    const response = await fetch('${API_BASE_URL}/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    const data = await response.json();
    
    if(response.ok) {
      // Guardar token y actualizar UI
      localStorage.setItem('authToken', data.token);
      updateAuthUI(true);
      bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    } else {
      alert(data.message || 'Credenciales incorrectas');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error al conectar con el servidor');
  }
});

// Actualizar UI según estado de autenticación
function updateAuthUI(isLoggedIn) {
  const userDropdown = document.getElementById('user-dropdown');
  
  if(isLoggedIn) {
    // Cambiar el dropdown para mostrar opciones de usuario logeado
    userDropdown.innerHTML = `
      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
        <i class="bi bi-person-check"></i> Mi Cuenta
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Mis Configuraciones</a></li>
        <li><a class="dropdown-item" href="#">Perfil</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#" id="logoutBtn">Cerrar Sesión</a></li>
      </ul>
    `;
    
    document.getElementById('logoutBtn').addEventListener('click', logout);
  }
}

// temporal function to test if frontend can reach backend.
async function testConnection() {
	try {
		const response = await fetch('${API_BASE_URL}/api/health', {
			mode: 'cors';
			credentials: 'include'
		});
		
		if (!response.ok) {
			throw new Error('HTTP error! status: ${response.status}');
		}
		
		const data = await response.json();
		console.log('Connection test successful:', data);
		return true;
	} catch (error) {
		console.log('Connection test failed:', error);
		alert('Failed to connect to backend: ${error.message}');
		return false;
	}
}




testConnection();

// Función de logout
function logout() {
  localStorage.removeItem('authToken');
  updateAuthUI(false);
}

// Verificar estado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('authToken');
  updateAuthUI(!!token);
});
// END Manejar formularios
