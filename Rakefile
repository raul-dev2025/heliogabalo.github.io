def get_stdin(message)
  print message
  STDIN.gets.chomp
end
task :post do |args|
  title = get_stdin("Enter a title for your post: ")
   filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.split.first}.markdown"
   puts "Creating new post: #{filename}"
   open(filename, 'w') do |post|
      post.puts "---"
      post.puts "layout: post"
      post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
      post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M:%S %z')}"
      post.puts 'author: Heliogabalo Santos'
      post.puts "comments: true"
      post.puts "categories: "
      post.puts "---\n"
   end
end
