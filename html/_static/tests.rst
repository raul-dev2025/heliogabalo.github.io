.. warning::
    The following catalog has been generated using LTP metadata
    which is including only tests using the new :ref:`LTP C API`.

abort01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/abort/abort01.c>`__

Checks that process which called abort() gets killed by SIGIOT and dumps core.

**Algorithm**
 - Fork child.
 - Child calls abort.
 - Parent checks return status.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

accept01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/accept/accept01.c>`__

Verify that accept() returns the proper errno for various failure cases.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

accept02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/accept/accept02.c>`__

Test for CVE-2017-8890

In Kernels up to 4.10.15 missing commit 657831ff the multicast
group information of a socket gets copied over to a newly created
socket when using the accept() syscall. This will cause a double free
when closing the original and the cloned socket.

WARNING:
There is a high chance that this test will cause an unstable system
if it does not succeed!

For more information about this CVE see:
https://www.suse.com/security/cve/CVE-2017-8890/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-8890 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8890>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `657831ff <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=657831ff>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

accept03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/accept/accept03.c>`__

Verify that accept() returns ENOTSOCK or EBADF for non-socket file
descriptors. The EBADF is returned in the case that the file descriptor has
not a file associated with it, which is for example in the case of O_PATH
opened file.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

accept4_01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/accept4/accept4_01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

access01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/access/access01.c>`__

Basic test for access(2) using F_OK, R_OK, W_OK and X_OK

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

access02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/access/access02.c>`__

Test access(2) syscall

- check the existence or read/write/execute permissions on a file (mode argument: F_OK/R_OK/W_OK/X_OK)
- test the accessibility of the file referred to by symbolic link if the pathname points to a symbolic link
- file can be stat/read/written/executed as root and nobody

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

access03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/access/access03.c>`__

access(2) test for errno(s) EFAULT as root and nobody respectively.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

access04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/access/access04.c>`__

-  access() fails with -1 return value and sets errno to EINVAL
   if the specified access mode argument is invalid.
-  access() fails with -1 return value and sets errno to ENOENT
   if the specified file doesn't exist (or pathname is NULL).
-  access() fails with -1 return value and sets errno to ENAMETOOLONG
   if the pathname size is > PATH_MAX characters.
-  access() fails with -1 return value and sets errno to ENOTDIR
   if a component used as a directory in pathname is not a directory.
-  access() fails with -1 return value and sets errno to ELOOP
   if too many symbolic links were encountered in resolving pathname.
-  access() fails with -1 return value and sets errno to EROFS
   if write permission was requested for files on a read-only file system.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

acct01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/acct/acct01.c>`__

Verify that acct() returns proper errno on failure.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_BSD_PROCESS_ACCT=y
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

acct02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/acct/acct02.c>`__

This tests if the kernel writes correct data to the
process accounting file.

First, system-wide process accounting is turned on and the output gets
directed to a defined file. After that a dummy program is run in order
to generate data and the process accounting gets turned off again.

To verify the written data, the entries of the accounting file get
parsed into the corresponding acct structure. Since it cannot be guaranteed
that only the command issued by this test gets written into the accounting
file, the contents get parsed until the correct entry is found, or EOF
is reached.

This is also regression test for commit:
4d9570158b62 ("kernel/acct.c: fix the acct->needcheck check in check_free_space()")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `4d9570158b626 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4d9570158b626>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_BSD_PROCESS_ACCT
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

add_key01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/add_key/add_key01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

add_key02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/add_key/add_key02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5649645d725c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5649645d725c>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-15274 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15274>`_




.. raw:: html

    <hr>

add_key03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/add_key/add_key03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `237bbd29f7a0 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=237bbd29f7a0>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

add_key04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/add_key/add_key04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-12193 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12193>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `ea6789980fda <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ea6789980fda>`_




.. raw:: html

    <hr>

add_key05
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/add_key/add_key05.c>`__


Test timeout is 2 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a08bf91ce28 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a08bf91ce28>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `2e356101e72 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2e356101e72>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/kernel/keys/gc_delay
       | /proc/sys/kernel/keys/maxkeys
       | /proc/sys/kernel/keys/maxbytes
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - | useradd
       | userdel
       | groupdel


.. raw:: html

    <hr>

adjtimex01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/adjtimex/adjtimex01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

adjtimex02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/adjtimex/adjtimex02.c>`__

Tests for adjtimex() error conditions:

- EPERM with SET_MODE as nobody
- EFAULT with SET_MODE and invalid timex pointer
- EINVAL with ADJ_TICK greater than max tick
- EINVAL with ADJ_TICK smaller than min tick

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

adjtimex03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/adjtimex/adjtimex03.c>`__

CVE-2018-11508: Test 4-byte kernel data leak via adjtimex.

On calling the adjtimex() function call with invalid mode (let's say
0x8000), ideally all the parameters should return with null data. But,
when we read the last parameter we will receive 4 bytes of kernel data.
This proves that there are 4 bytes of info leaked. The bug was fixed in
Kernel Version 4.16.9. Therefore, the below test case will only be
applicable for the kernel version 4.16.9 and above.

So basically, this test shall check whether there is any data leak.
To test that, Pass struct timex buffer filled with zero with
some INVALID mode to the system call adjtimex. Passing an invalid
parameters will not call do_adjtimex() and before that, it shall throw
an error (on error test shall not break). Therefore, none of the parameters
will get initialized.

On reading the last attribute tai of the struct, if the attribute is non-
zero the test is considered to have failed, else the test is considered
to have passed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2018-11508 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-11508>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `0a0b98734479 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0a0b98734479>`_




.. raw:: html

    <hr>

af_alg01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `af3ff8045bbf <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=af3ff8045bbf>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17806 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17806>`_




.. raw:: html

    <hr>

af_alg02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg02.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ecaaab564978 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ecaaab564978>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17805 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17805>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

af_alg03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e57121d08c38 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e57121d08c38>`_




.. raw:: html

    <hr>

af_alg04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `bb2964810233 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bb2964810233>`_




.. raw:: html

    <hr>

af_alg05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8088d3dd4d7c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8088d3dd4d7c>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `160544075f2a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=160544075f2a>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `0868def3e410 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0868def3e410>`_




.. raw:: html

    <hr>

af_alg06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8f9c46934848 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8f9c46934848>`_




.. raw:: html

    <hr>

af_alg07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/af_alg07.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ff7b11aa481f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ff7b11aa481f>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `9060cb719e61 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9060cb719e61>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2019-8912 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-8912>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`min_kver <tst_test>`
     - 4.10.0
   * -  :c:struct:`min_cpus <tst_test>`
     - 2


.. raw:: html

    <hr>

aio-stress
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/aio-stress.c>`__

Test creates a series of files and start AIO operations on them.
AIO is done in a rotating loop: first file1.bin gets 8 requests, then
file2.bin, then file3.bin etc. As each file finishes writing, test switches
to reads. IO buffers are aligned in case we want to do direct IO.

Test timeout is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -a
     - Total number of ayncs I/O the program will run (default 500)
   * - -b
     - Max number of iocbs to give io_submit at once
   * - -c
     - Number of io contexts per file
   * - -d
     - Number of pending aio requests for each file (default 64)
   * - -e
     - Number of I/O per file sent before switching to the next file (default 8)
   * - -f
     - Number of files to generate
   * - -g
     - Offset between contexts (default 2M)
   * - -l
     - Print io_submit latencies after each stage
   * - -L
     - Print io completion latencies after each stage
   * - -m
     - SHM use ipc shared memory for io buffers instead of malloc
   * - -n
     - No fsyncs between write stage and read stage
   * - -o
     - Add an operation to the list: write=0, read=1, random write=2, random read=3
   * - -O
     - Use O_DIRECT
   * - -r
     - Record size in KB used for each io (default 64K)
   * - -s
     - Size in MB of the test file(s) (default 1024M)
   * - -t
     - Number of threads to run
   * - -u
     - Unlink files after completion
   * - -v
     - Verification of bytes written


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

aio02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/aio/aio02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

aiocp
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/aiocp.c>`__

Copy file by using an async I/O state machine.

- Start read request
- When read completes turn it into a write request
- When write completes decrement counter and free up resources

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -b
     - Size of writing blocks (default 1K)
   * - -s
     - Size of file (default 10M)
   * - -n
     - Number of Async IO blocks (default 16)
   * - -f
     - Open flag: SYNC | DIRECT (default O_CREAT only)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

aiodio_append
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/aiodio_append.c>`__

Append zeroed data to a file using libaio while other processes are doing
buffered reads and check if the buffer reads always see zero.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of threads (default 16)
   * - -s
     - Size of the file to write (default 64K)
   * - -c
     - Number of appends (default 1000)
   * - -b
     - Number of async IO blocks (default 16)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

aiodio_sparse
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/aiodio_sparse.c>`__

Create a sparse file and write zeroes to it using libaio while other
processes are doing buffered reads and check if the buffer reads always see
zero.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of threads (default 16)
   * - -w
     - Size of writing blocks (default 1K)
   * - -s
     - Size of file (default 100M)
   * - -o
     - Number of AIO control blocks (default 16)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

alarm02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/alarm/alarm02.c>`__

Verify that alarm() returns:

- zero when there was no previously scheduled alarm
- number of seconds remaining until any previously scheduled alarm

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

alarm03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/alarm/alarm03.c>`__

Verify that alarms created by alarm() are not inherited by children
created via fork.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

alarm05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/alarm/alarm05.c>`__

 The return value of the alarm system call should be equal to the
 amount previously remaining in the alarm clock.
 A SIGALRM signal should be received after the specified amount of
 time has elapsed.

Test timeout is 2 seconds.




.. raw:: html

    <hr>

alarm06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/alarm/alarm06.c>`__

Verify that any pending alarm() is canceled when seconds is zero.

Test timeout is 4 seconds.




.. raw:: html

    <hr>

alarm07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/alarm/alarm07.c>`__

Verify that SIGALRM signal scheduled by alarm() in the parent process
is not delivered to the child process.

Test timeout is 4 seconds.




.. raw:: html

    <hr>

arch_prctl01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/arch_prctl/arch_prctl01.c>`__

Simple test on arch_prctl to set and get cpuid instruction of test thread.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.12
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86


.. raw:: html

    <hr>

asapi_02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/lib6/asapi_02.c>`__

Basic test for ICMP6_FILTER.

For ICMP6_FILTER usage, refer to: https://man.openbsd.org/icmp6.

Because of the extra functionality of ICMPv6 in comparison to ICMPv4, a
larger number of messages may be potentially received on an ICMPv6 socket.
Input filters may therefore be used to restrict input to a subset of the
incoming ICMPv6 messages so only interesting messages are returned by the
recv(2) family of calls to an application.

The icmp6_filter structure may be used to refine the input message set
according to the ICMPv6 type. By default, all messages types are allowed
on newly created raw ICMPv6 sockets. The following macros may be used to
refine the input set, thus being tested:

void ICMP6_FILTER_SETPASSALL(struct icmp6_filter *filterp)
&ndash; Allow all incoming messages. filterp is modified to allow all message types.

void ICMP6_FILTER_SETBLOCKALL(struct icmp6_filter *filterp)
&ndash; Ignore all incoming messages. filterp is modified to ignore all message types.

void ICMP6_FILTER_SETPASS(int, struct icmp6_filter *filterp)
&ndash; Allow ICMPv6 messages with the given type. filterp is modified to allow such
messages.

void ICMP6_FILTER_SETBLOCK(int, struct icmp6_filter *filterp)
&ndash; Ignore ICMPv6 messages with the given type. filterp is modified to ignore
such messages.

int ICMP6_FILTER_WILLPASS(int, const struct icmp6_filter *filterp)
&ndash; Determine if the given filter will allow an ICMPv6 message of the given type.

int ICMP6_FILTER_WILLBLOCK(int, const struct icmp6_filter *)
&ndash; Determine if the given filter will ignore an ICMPv6 message of the given type.

The getsockopt(2) and setsockopt(2) calls may be used to obtain and install
the filter on ICMPv6 sockets at option level IPPROTO_ICMPV6 and name ICMP6_FILTER
with a pointer to the icmp6_filter structure as the option value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

aslr01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/aslr/aslr01.c>`__

Test that address space layout randomization (ASLR) is sufficiently random.
A bug in dynamic library mmapping may reduce ASLR randomness if the library
file is larger than hugepage size. In 32bit compat mode, this may
completely disable ASLR and force large dynamic libraries to be loaded
at fixed addresses.

The issue may not be reproducible if hugepage support is missing or no
sufficiently large library is loaded into the test program. If libc is not
large enough, you may use `export LD_PRELOAD=...` to load another
sufficiently large library. The export keyword is required because
the checks are done on a subprocess.

In normal mode, the test checks that library base address has a minimum
number of random bits (configurable using the -b option). In strict mode,
the test checks that library base address is aligned to regular pagesize
(not hugepage) and the number of random bits is at least
CONFIG_ARCH_MMAP_RND_BITS_MIN or the compat equivalent. The -b option is
ignored.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -b
     - Minimum ASLR random bits (default: 8)
   * - -s
     - Run in strict mode


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_HAVE_ARCH_MMAP_RND_BITS=y
   * -  :c:struct:`needs_cmds <tst_test>`
     - ldd


.. raw:: html

    <hr>

autogroup01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sched/autogroup/autogroup01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `18f649ef3441 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=18f649ef3441>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

bind01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

bind02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind02.c>`__

Make sure bind() of privileged port gives EACCESS error for non-root users.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

bind03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

bind04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind04.c>`__


Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

bind05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

bind06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bind/bind06.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `15fe076edea7 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=15fe076edea7>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-18559 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-18559>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

block_dev
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/device-drivers/block/block_dev_user/block_dev.c>`__

Test checks block device kernel API.

Test timeout defaults is 30 seconds.




.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

bpf_map01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_map01.c>`__

Trivial Extended Berkeley Packet Filter (eBPF) test.

Sanity check creating and updating maps.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

bpf_prog01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog01.c>`__

Trivial Extended Berkeley Packet Filter (eBPF) test.

Sanity check loading and running bytecode.

**Algorithm**

- Create array map
- Load eBPF program
- Attach program to socket
- Send packet on socket
- This should trigger eBPF program which writes to array map
- Verify array map was written to

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

bpf_prog02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog02.c>`__

Check if eBPF can do arithmetic with 64bits. This targets a specific
regression which only effects unprivileged users who are subject to extra
pointer arithmetic checks during verification.

Fixed by kernel commit
3612af783cf5 ("bpf: fix sanitation rewrite in case of non-pointers")

https://blog.cloudflare.com/ebpf-cant-count/

This test is very similar in structure to bpf_prog01 which is better
annotated.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `3612af783cf5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3612af783cf5>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

bpf_prog03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog03.c>`__

CVE-2017-16995

Test for the bug fixed by kernel commit
95a762e2c8c9 ("bpf: fix incorrect sign extension in check_alu_op()")

The test is very similar to the original reproducer:
https://bugs.chromium.org/p/project-zero/issues/detail?id=1454

However it has been modified to try to corrupt the map struct instead of
writing to a noncanonical pointer. This appears to be more reliable at
producing stack traces and confirms we would be able to overwrite the ops
function pointers, as suggested by Jan Horn.

If the eBPF code is loaded then this is considered a failure regardless of
whether it is able to cause any visible damage.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `95a762e2c8c9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=95a762e2c8c9>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-16995 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-16995>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

bpf_prog04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog04.c>`__

CVE 2018-18445

Check that eBPF verifier correctly handles 32-bit arithmetic, in particular
the right bit shift instruction. It is an error if the BPF program passes
verification regardless of whether it then causes any actual damage. Kernel
bug fixed in:
b799207e1e18 ("bpf: 32-bit RSH verification must truncate input before the ALU op")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b799207e1e18 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b799207e1e18>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-18445 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-18445>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

bpf_prog05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog05.c>`__

Compare the effects of 32-bit div/mod by zero with the "expected"
behaviour.

The commit "bpf: fix subprog verifier bypass by div/mod by 0
exception", changed div/mod by zero from exiting the current
program to setting the destination register to zero (div) or
leaving it untouched (mod).

This solved one verfier bug which allowed dodgy pointer values, but
it turned out that the source register was being 32-bit truncated
when it should not be. Also the destination register for mod was
not being truncated when it should be.

So then we have the following two fixes:
"bpf: Fix 32 bit src register truncation on div/mod"
"bpf: Fix truncation handling for mod32 dst reg wrt zero"

Testing for all of these issues is a problem. Not least because
division by zero is undefined, so in theory any result is
acceptable so long as the verifier and runtime behaviour
match.

However to keep things simple we just check if the source and
destination register runtime values match the current upstream
behaviour at the time of writing.

If the test fails you may have one or more of the above patches
missing. In this case it is possible that you are not vulnerable
depending on what other backports and fixes have been applied. If
upstream changes the behaviour of division by zero, then the test
will need updating.

Note that we use r6 as the src register and r7 as the dst. w6 and
w7 are the same registers treated as 32bit.

Test timeout is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f6b1b3bf0d5f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f6b1b3bf0d5f>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `468f6eafa6c4 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=468f6eafa6c4>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `e88b2c6e5a4d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e88b2c6e5a4d>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `9b00f1b78809 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9b00f1b78809>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2021-3444 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2021-3444>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_DROP,CAP_BPF)


.. raw:: html

    <hr>

bpf_prog06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog06.c>`__

ringbuf_submit takes a pointer to a ringbuf record, but not the
size of this record. The verifier only validates offset ptrs[1] passed
to functions if the function has a size parameter. So we can
perform a wide range of ptr arithmetic on this record ptr.

ringbuf_submit updates some data (i.e. the length) in the
ringbuf header which is calculated from the record ptr. So this can
be used to corrupt memory.

This test does not try to cause a crash. Howver it does run the
eBPF if it can. This will result in an instant crash or memory
corruption which may later cause a crash.

This test is adapted from a full reproducer which can be found here:
https://github.com/tr3ee/CVE-2021-4204

It's recommended to disable unprivileged eBPF by setting
/proc/sys/kernel/unprivileged_bpf_disabled. Also there is a
specific fix for this issue:

commit 64620e0a1e712a778095bd35cbb277dc2259281f
Author: Daniel Borkmann <daniel@iogearbox.net>
Date:   Tue Jan 11 14:43:41 2022 +0000

 bpf: Fix out of bounds access for ringbuf helpers

[1]: Depending on the ptr/reg type

Test timeout is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `64620e0a1e71 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=64620e0a1e71>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2021-4204 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2021-4204>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.8
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_DROP,CAP_BPF)


.. raw:: html

    <hr>

bpf_prog07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/bpf/bpf_prog07.c>`__

The verifier did not properly restrict some *_OR_NULL pointer
types. Including RET_PTR_TO_ALLOC_MEM_OR_NULL which is returned by
ringbuf_reserve. Somehow this means they can be used to perform
arbitrary pointer arithmetic.

The test tries to do some pointer arithmetic on the return value of
ringbuf_reserve. Possibly with a trick to make the verifier believe
the pointer (in r1) is NULL. The test will pass if the eBPF is
rejected and will fail otherwise.

This test does not try to cause a crash. Howver it does run the
eBPF if it can. This will result in an instant crash or memory
corruption which may later cause a crash.

This test is adapted from a full reproducer which can be found here:
https://github.com/tr3ee/CVE-2022-23222

It's recommended to disable unprivileged eBPF by setting
/proc/sys/kernel/unprivileged_bpf_disabled. Also there is a
specific fix for this issue:

commit 64620e0a1e712a778095bd35cbb277dc2259281f
Author: Daniel Borkmann <daniel@iogearbox.net>
Date:   Tue Jan 11 14:43:41 2022 +0000

 bpf: Fix out of bounds access for ringbuf helpers

Test timeout is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `64620e0a1e71 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=64620e0a1e71>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2022-23222 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2022-23222>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.8
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_DROP,CAP_BPF)


.. raw:: html

    <hr>

brk01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/brk/brk01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

brk02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/brk/brk02.c>`__

Expand brk() by at least 2 pages to ensure there is a newly created VMA
and not expanding the original due to multiple anon pages.  mprotect() that
new VMA then brk() back to the original address therefore causing a munmap of
at least one full VMA.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

cacheflush01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cacheflush/cacheflush01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

cachestat01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cachestat/cachestat01.c>`__

This test verifies that cachestat() syscall is properly counting cached pages
written inside a file. If storage device synchronization is requested, test
will check if the number of dirty pages is zero.

**Algorithm**

- create a file with specific amount of pages
- synchronize storage device, if needed
- monitor file with cachestat()
- check if the right amount of pages have been moved into cache
- if storage device synchronization is requested, check that dirty pages is
   zero

Test timeout is 13 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | fuse
       | tmpfs
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

cachestat02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cachestat/cachestat02.c>`__

This test verifies that cachestat() syscall is properly counting cached pages
written inside a shared memory.

**Algorithm**

- create a shared memory with a specific amount of pages
- monitor file with cachestat()
- check if the right amount of pages have been moved into cache

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

cachestat03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cachestat/cachestat03.c>`__

This test verifies that cachestat() syscall is properly failing with relative
error codes according to input parameters.

- EFAULT: cstat or cstat_range points to an illegal address
- EINVAL: invalid flags
- EBADF: invalid file descriptor
- EOPNOTSUPP: file descriptor is of a hugetlbfs file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

cachestat04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cachestat/cachestat04.c>`__

This test verifies cachestat() for all the possible file descriptors,
checking that cache statistics are always zero, except for unsupported file
descriptors which cause EBADF to be raised.

Test timeout is 2 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

can_bcm01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/can/cve/can_bcm01.c>`__

CVE-2021-3609

Test for race condition vulnerability in CAN BCM. Fixed in:
d5f9023fa61e ("can: bcm: delay release of struct bcm_op after synchronize_rcu()").

The test is skipped when running in 32-bit compat mode. The kernel
compatibility layer for CAN structures is not implemented at the
time of writing.

Test timeout defaults is 30 seconds.
Maximum runtime is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d5f9023fa61e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d5f9023fa61e>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-3609 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3609>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - | vcan
       | can-bcm
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

can_filter
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/can/filter-tests/can_filter.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -d
     - CAN device name


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - | vcan
       | can-raw
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_REQ,CAP_NET_RAW)
       | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

can_rcv_own_msgs
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/can/filter-tests/can_rcv_own_msgs.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -d
     - CAN device name


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_REQ,CAP_NET_RAW)
       | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
   * -  :c:struct:`needs_drivers <tst_test>`
     - | vcan
       | can-raw


.. raw:: html

    <hr>

capget01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capget/capget01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_NET_RAW)


.. raw:: html

    <hr>

capget02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capget/capget02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

capset01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capset/capset01.c>`__

Test capset() with with LINUX_CAPABILITY_VERSION_{1,2,3}.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

capset02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capset/capset02.c>`__

Verify that, capset(2) fails and sets errno to

- EFAULT if an invalid address is given for header.
- EFAULT if an invalid address is given for data.
- EINVAL if an invalid value is given for header->version.
- EPERM if the new_Effective is not a subset of the new_Permitted.
- EPERM if the new_Permitted is not a subset of the old_Permitted.
- EPERM if the new_Inheritable is not a subset of the
  old_Inheritable and bounding set.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

capset03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capset/capset03.c>`__

capset() fails with errno set or EPERM if the new_Inheritable is
not a subset of old_Inheritable and old_Permitted without CAP_SETPCAP.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

capset04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/capset/capset04.c>`__

Test whether capset() can be used to modify the capabilities of a thread
other than itself. Now, most linux distributions with kernel supporting
VFS capabilities, this should be never permitted.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

cfs_bandwidth01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sched/cfs-scheduler/cfs_bandwidth01.c>`__

Creates a multi-level CGroup hierarchy with the cpu controller
enabled. The leaf groups are populated with "busy" processes which
simulate intermittent cpu load. They spin for some time then sleep
then repeat.

Both the trunk and leaf groups are set cpu bandwidth limits. The
busy processes will intermittently exceed these limits. Causing
them to be throttled. When they begin sleeping this will then cause
them to be unthrottle.

The test is known to reproduce an issue with an update to
SLE-15-SP1 (kernel 4.12.14-197.64,
https://bugzilla.suse.com/show_bug.cgi?id=1179093).

Also as an reproducer for another bug:

   commit fdaba61ef8a268d4136d0a113d153f7a89eb9984
   Author: Rik van Riel <riel@surriel.com>
   Date:   Mon Jun 21 19:43:30 2021 +0200

   sched/fair: Ensure that the CFS parent is added after unthrottling

Test timeout is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `39f23ce07b93 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=39f23ce07b93>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `b34cb07dde7c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b34cb07dde7c>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `fe61468b2cbc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fe61468b2cbc>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `5ab297bab984 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5ab297bab984>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `6d4d22468dae <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6d4d22468dae>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `fdaba61ef8a2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fdaba61ef8a2>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - cpu
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CFS_BANDWIDTH
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

cgroup_core01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/cgroup/cgroup_core01.c>`__

When a task is writing to an fd opened by a different task, the perm check
should use the credentials of the latter task.

It is copy from kernel selftests cgroup test_core test_cgcore_lesser_euid_open
subcase. The difference is that kernel selftest only supports cgroup v2 but
here we also support cgroup v1 and v2.

It is a regression test for

commit 1756d7994ad85c2479af6ae5a9750b92324685af
Author: Tejun Heo <tj@kernel.org>
Date:   Thu Jan 6 11:02:28 2022 -1000

cgroup: Use open-time credentials for process migraton perm checks

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `1756d7994ad8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1756d7994ad8>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-4197 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-4197>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

cgroup_core02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/cgroup/cgroup_core02.c>`__

When a task is writing to an fd opened by a different task, the perm check
should use the cgroup namespace of the latter task.

It is copy from kernel selftests cgroup test_core test_cgcore_lesser_ns_open
subcase. Note that this case only runs on cgroup2 as cgroup1 doesn't have
namespace support.

It is a regression test for

commit e57457641613fef0d147ede8bd6a3047df588b95
Author: Tejun Heo <tj@kernel.org>
Date:   Thu Jan 6 11:02:29 2022 -1000

cgroup: Use open-time cgroup namespace for process migration perm checks

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e57457641613 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e57457641613>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-4197 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-4197>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_nsdelegate <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2


.. raw:: html

    <hr>

cgroup_core03
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/cgroup/cgroup_core03.c>`__

This test is copied from kselftest
tools/testing/selftests/cgroup/test_kill.c.

Only simple test implemented within current case, the other cases such
as test_cgkill_tree and test_cgkill_forkbomb can be created later.


Test timeout is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - base
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chdir01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chdir/chdir01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chdir04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chdir/chdir04.c>`__

Testcase to test whether chdir(2) sets errno correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod01.c>`__

Verify that chmod(2) succeeds when used to change the mode permissions
of a file or directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod03.c>`__

Verify that, chmod(2) will succeed to change the mode of a file or directory
and set the sticky bit on it if invoked by non-root (uid != 0)
process with the following constraints:

- the process is the owner of the file or directory.
- the effective group ID or one of the supplementary group ID's of the
  process is equal to the group ID of the file or directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod06.c>`__

Verify that, chmod(2) returns -1 and sets errno to

- EPERM if the effective user id of process does not match the owner of the
  file and the process is not super user
- EACCES if search permission is denied on a component of the path prefix
- EFAULT if pathname points outside user's accessible address space
- ENAMETOOLONG if the pathname component is too long
- ENOTDIR if the directory component in pathname is not a directory
- ENOENT if the specified file does not exists

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod08.c>`__

Test verifies that chmod() is working correctly on symlink()
generated files.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chmod09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chmod/chmod09.c>`__

Test for kernel commit
5d1f903f75a8 ("attr: block mode changes of symlinks")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5d1f903f75a8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5d1f903f75a8>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.6
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chown01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chown/chown01.c>`__

Basic test for chown(). Calls chown() on a file and expects it to pass.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chown02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chown/chown02.c>`__

Verify that chown(2) invoked by super-user:

 - clears setuid and setgid bits set on an executable file
 - preserves setgid bit set on a non-group-executable file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chown03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chown/chown03.c>`__

Verify that, chown(2) succeeds to change the group of a file specified
by path when called by non-root user with the following constraints:

- euid of the process is equal to the owner of the file.
- the intended gid is either egid, or one of the supplementary gids
  of the process.

Also verify that chown() clears the setuid/setgid bits set on the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chown04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chown/chown04.c>`__

Verify that:

1. Chown() returns -1 and sets errno to EPERM if the effective user id
   of process does not match the owner of the file and the process is not
   super user.
2. Chown() returns -1 and sets errno to EACCES if search permission is
   denied on a component of the path prefix.
3. Chown() returns -1 and sets errno to EFAULT if pathname points outside
   user's accessible address space.
4. Chown() returns -1 and sets errno to ENAMETOOLONG if the pathname
   component is too long.
5. Chown() returns -1 and sets errno to ENOENT if the specified file does
   not exists.
6. Chown() returns -1 and sets errno to ENOTDIR if the directory component
   in pathname is not a directory.
7. Chown() returns -1 and sets errno to ELOOP if too many symbolic links
   were encountered in resolving pathname.
8. Chown() returns -1 and sets errno to EROFS if the named file resides on
   a read-only filesystem.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

chown05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chown/chown05.c>`__

Verify that, chown(2) succeeds to change the owner and group of a file
specified by path to any numeric owner(uid)/group(gid) values when invoked
by super-user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chroot01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chroot/chroot01.c>`__

Testcase to check the whether chroot sets errno to EPERM.

As a non-root user attempt to perform chroot() to a directory. The
chroot() call should fail with EPERM

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

chroot02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chroot/chroot02.c>`__

Basic chroot() functionality test.

- Create a file in the temporary directory
- Change the root to this temporary directory
- Check whether this file can be accessed in the new root directory

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

chroot03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chroot/chroot03.c>`__

Testcase to test whether chroot(2) sets errno correctly.

- to test whether chroot() is setting ENAMETOOLONG if the
  pathname is more than VFS_MAXNAMELEN.
- to test whether chroot() is setting ENOTDIR if the argument
  is not a directory.
- to test whether chroot() is setting ENOENT if the directory
  does not exist.
- attempt to chroot to a path pointing to an invalid address
  and expect EFAULT as errno.
- to test whether chroot() is setting ELOOP if the two
  symbolic directory who point to each other.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

chroot04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/chroot/chroot04.c>`__

Testcase to check that chroot sets errno to EACCES.

As a non-root user attempt to perform chroot() to a directory that the user
does not have a search permission for. The chroot() call should fail with
EACESS.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_adjtime01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_adjtime/clock_adjtime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_adjtime02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_adjtime/clock_adjtime02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_getres01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_getres/clock_getres01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 7


.. raw:: html

    <hr>

clock_gettime01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_gettime/clock_gettime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_gettime02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_gettime/clock_gettime02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_gettime03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_gettime/clock_gettime03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TIME_NS=y
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

clock_gettime04
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_gettime/clock_gettime04.c>`__

Check time difference between successive readings and report a bug if
difference found to be over 5 ms.

This test reports a s390x BUG which has been fixed in:

   commit 5b43bd184530af6b868d8273b0a743a138d37ee8
   Author: Heiko Carstens <hca@linux.ibm.com>
   Date:   Wed Mar 24 20:23:55 2021 +0100

   s390/vdso: fix initializing and updating of vdso_data

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5b43bd184530 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5b43bd184530>`_




.. raw:: html

    <hr>

clock_nanosleep01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_nanosleep/clock_nanosleep01.c>`__


Test timeout is 3 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

clock_nanosleep02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_nanosleep/clock_nanosleep02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - clock_nanosleep()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

clock_nanosleep03
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_nanosleep/clock_nanosleep03.c>`__

Test that clock_nanosleep() adds correctly an offset with absolute timeout
and CLOCK_MONOTONIC inside of a timer namespace.

After a call to unshare(CLONE_NEWTIME) a new timer namespace is created, the
process that has called the unshare() can adjust offsets for CLOCK_MONOTONIC
and CLOCK_BOOTTIME for its children by writing to the '/proc/self/timens_offsets'.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TIME_NS=y


.. raw:: html

    <hr>

clock_nanosleep04
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_nanosleep/clock_nanosleep04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

clock_settime01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_settime/clock_settime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_settime02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_settime/clock_settime02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1


.. raw:: html

    <hr>

clock_settime03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_settime/clock_settime03.c>`__


Test timeout is 4 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1


.. raw:: html

    <hr>

clone01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone01.c>`__

Basic clone() test.

Use clone() to create a child process, and wait for the child process to exit,
verify that the child process pid is correct.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone03.c>`__

Check for equality of getpid() from a child and return value of clone(2)

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone04.c>`__

Verify that clone(2) fails with

- EINVAL if child stack is set to NULL

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`musl-git <tst_tag>`
     - `fa4a8abd06a4 <https://git.musl-libc.org/cgit/musl/commit/src/linux/clone.c?id=fa4a8abd06a4>`_




.. raw:: html

    <hr>

clone05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone05.c>`__

Call clone() with CLONE_VFORK flag set. verify that
execution of parent is suspended until child finishes

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone06.c>`__

Test to verify inheritance of environment variables by child.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone07.c>`__

Test for a libc bug where exiting child function by returning from
it caused SIGSEGV.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone08.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

clone09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone/clone09.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

clone301
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone3/clone301.c>`__

Basic clone3() test.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

clone302
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone3/clone302.c>`__

Basic clone3() test to check various failures.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

clone303
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clone3/clone303.c>`__

This test case check clone3 CLONE_INTO_CGROUP flag


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.7
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - base
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

close01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/close/close01.c>`__

Test that closing a file/pipe/socket works correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

close02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/close/close02.c>`__

Call close(-1) and expects it to return EBADF.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

close_range01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/close_range/close_range01.c>`__

We check that close_range()

- closes FDs
- UNSHARES some FDs before closing them
- it sets CLOEXEC (in both cloned process and parent)
- combination of CLOEXEC and UNSHARE.

The final test is the actual bug reproducer. Note that we call
clone directly to share the file table.

Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `fec8a6a69103 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fec8a6a69103>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

close_range02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/close_range/close_range02.c>`__

- First check close_range works on a valid range.
- Then check close_range does not accept invalid paramters.
- Then check it accepts a large lower fd.
- Finally check CLOEXEC works


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

confstr01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/confstr/confstr01.c>`__

Test confstr(3) 700 (X/Open 7) functionality -- POSIX 2008.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

connect02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/connect/connect02.c>`__


Test timeout is 3 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9d538fa60bad <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9d538fa60bad>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `82c9ae440857 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=82c9ae440857>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-9568 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-9568>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

copy_file_range01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/copy_file_range/copy_file_range01.c>`__


Test timeout is 5 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

copy_file_range02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/copy_file_range/copy_file_range02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

copy_file_range03
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/copy_file_range/copy_file_range03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

cpuset01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/cpuset/cpuset01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - cpuset


.. raw:: html

    <hr>

creat01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat05.c>`__


Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

creat07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - creat07_child
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat08.c>`__

Verify that the group ID and setgid bit are set correctly when a new file
is created.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

creat09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/creat/creat09.c>`__

CVE-2018-13405

Check for possible privilege escalation through creating files with setgid
bit set inside a setgid directory owned by a group which the user does not
belong to.

Fixed in:

 commit 0fa3ecd87848c9c93c2c828ef4c3a8ca36ce46c7
 Author: Linus Torvalds <torvalds@linux-foundation.org>
 Date:   Tue Jul 3 17:10:19 2018 -0700

 Fix up non-directory creation in SGID directories

This fix is incomplete if file is on xfs filesystem.

Fixed in:

 commit 01ea173e103edd5ec41acec65b9261b87e123fc2
 Author: Christoph Hellwig <hch@lst.de>
 Date:   Fri Jan 22 16:48:18 2021 -0800

 xfs: fix up non-directory creation in SGID directories

When use acl or umask, it still has bug.

Fixed in:

 commit 1639a49ccdce58ea248841ed9b23babcce6dbb0b
 Author: Yang Xu <xuyang2018.jy@fujitsu.com>
 Date:   Thu July 14 14:11:27 2022 +0800

 fs: move S_ISGID stripping into the vfs_*() helpers

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `0fa3ecd87848 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0fa3ecd87848>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-13405 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-13405>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-4037 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-4037>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `01ea173e103e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=01ea173e103e>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `1639a49ccdce <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1639a49ccdce>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `426b4ca2d6a5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=426b4ca2d6a5>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | ntfs
       | vfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

crypto_user01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/crypto_user01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f43f39958beb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f43f39958beb>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2013-2547 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-2547>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-19854 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-19854>`_




.. raw:: html

    <hr>

crypto_user02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/crypto_user02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `21d4120ec6f5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=21d4120ec6f5>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

cve-2014-0196
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2014-0196.c>`__

Test for CVE-2014-0196, which was fixed in kernel v3.15:
4291086b1f08 ("n_tty: Fix n_tty_write crash when echoing in raw mode").

This test attempts to cause a buffer overflow using the race condition
described in CVE-2014-0196. If the test is successful in causing an
overflow it will most likely result in an immediate Oops, restart or
freeze. However if it overwrites memory not accessed during the test then
it could happen at a later time or not at all which is more likely if SLAB
randomization has been implemented. However as it currently stands, the test
usually crashes as soon as the delay has been calibrated.

To maximise the chances of the buffer overflow doing immediate detectable
damage the SLAB filler sockets and ioctls from the original exploit POC
have been kept even though they are not strictly necessary to reproduce the
bug.

Further details see privilege escalation POC
https://www.exploit-db.com/exploits/33516/.

Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `4291086b1f08 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4291086b1f08>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2014-0196 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-0196>`_




.. raw:: html

    <hr>

cve-2015-3290
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2015-3290.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 180 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9b6e6a8334d5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9b6e6a8334d5>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2015-3290 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-3290>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

cve-2016-10044
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2016-10044.c>`__

Test for CVE-2016-10044, which was fixed in kernel v4.8:
22f6b4d34fcf ("aio: mark AIO pseudo-fs noexec").

The test checks that we can not implicitly mark AIO mappings as
executable using the READ_IMPLIES_EXEC personality.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `22f6b4d34fcf <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=22f6b4d34fcf>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-10044 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-10044>`_




.. raw:: html

    <hr>

cve-2016-7042
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2016-7042.c>`__

Test for CVE-2016-7042, this regression test can crash the buggy kernel
when the stack-protector is enabled, and the bug was fixed in kernel v4.9:
03dab869b7b2 ("KEYS: Fix short sprintf buffer in /proc/keys show function").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `03dab869b7b2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=03dab869b7b2>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-7042 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7042>`_




.. raw:: html

    <hr>

cve-2016-7117
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2016-7117.c>`__

Test for CVE-2016-7117, which was fixed in kernel v4.6:
34b88a68f26a ("net: Fix use after free in the recvmmsg exit path").

Tests for a use after free caused by a race between recvmmsg() and close().
The exit path for recvmmsg() in (a2e2725541f: net: Introduce recvmmsg socket
syscall) called fput() on the active file descriptor before checking the
error state and setting the socket's error field.

If one or more messages are received by recvmmsg() followed by one which
fails, the socket's error field will be set. If just after recvmmsg() calls
fput(), a call to close() is made on the same file descriptor there is a
race between close() releasing the socket object and recvmmsg() setting its
error field.

fput() does not release a file descriptor's resources (e.g. a socket)
immediatly, it queues them to be released just before a system call returns
to user land. So the close() system call must call fput() after it is
called in recvmmsg(), exit and release the resources all before the socket
error is set.

Usually if the vulnerability is present the test will be killed with a
kernel null pointer exception. However this is not guaranteed to happen
every time.

The following was used for reference
https://blog.lizzie.io/notes-about-cve-2016-7117.html

Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `34b88a68f26a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=34b88a68f26a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-7117 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-7117>`_




.. raw:: html

    <hr>

cve-2017-16939
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2017-16939.c>`__

Test for CVE-2017-16939, which was fixed in kernel v4.14:
1137b5e2529a ("ipsec: Fix aborted xfrm policy dump crash").

Based on the reproducing code from Mohammed Ghannam, published on
https://blogs.securiteam.com/index.php/archives/3535

CAUTION! If your system is vulnerable to this CVE, the crashes kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `1137b5e2529a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1137b5e2529a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-16939 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-16939>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

cve-2017-17052
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2017-17052.c>`__

Test for CVE-2017-17052, which was fixed in kernel v4.13:
2b7e8665b4ff ("fork: fix incorrect fput of ->exe_file causing use-after-free").

Based on the reproducer taken from fixing kernel commit.

CAUTION! If your system is vulnerable to this CVE, the crashes kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `2b7e8665b4ff <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2b7e8665b4ff>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17052 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17052>`_




.. raw:: html

    <hr>

cve-2017-17053
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2017-17053.c>`__

Test for CVE-2017-17053, which was fixed in kernel 4.13:
ccd5b3235180 ("x86/mm: Fix use-after-free of ldt_struct").

Based on the reproducer taken from fixing kernel commit.

Test may crash the kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ccd5b3235180 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ccd5b3235180>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17053 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17053>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

cve-2017-2618
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2017-2618.c>`__

Test for CVE-2017-2618, which was fixed in kernel v4.10:
0c461cb727d1 ("selinux: fix off-by-one in setprocattr").

Test may crash the kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `0c461cb727d1 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0c461cb727d1>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-2618 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-2618>`_




.. raw:: html

    <hr>

cve-2017-2671
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2017-2671.c>`__

Test for CVE-2017-2671 faulty locking on ping socket fixed in kernel v4.11:
43a6684519ab ("ping: implement proper locking").

When sys_connect() is called with sockaddr.sin_family set to AF_UNSPEC on a
ping socket; __udp_disconnect() gets called, which in turn calls the buggy
function ping_unhashed(). This function does not obtain a rwlock before
checking if the socket is hashed allowing the socket data to be pulled from
underneath it in the time between calling sk_hashed() and gaining the write
lock.

This test repeatedly 'connects' a ping socket correctly then calls
connect() with AF_UNSPEC in two seperate threads to trigger the race
condition. If the bug is present, then the test will most likely crash the
system.

The test requests root privileges so that it can ensure ping sockets are
enabled. On distributions (including Android) where ping sockets are
enabled by default, root privileges are not required.

Test timeout defaults is 30 seconds.
Maximum runtime is 40 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `43a6684519ab <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=43a6684519ab>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-2671 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-2671>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

cve-2022-4378
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/cve-2022-4378.c>`__

Test for CVE-2022-4378 fixed in kernel v6.1:
bce9332220bd ("proc: proc_skip_spaces() shouldn't think it is working on C strings").

Check that writing several pages worth of whitespace into /proc/sys files
does not cause kernel stack overflow.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `bce9332220bd <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bce9332220bd>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2022-4378 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-4378>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

delete_module01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/delete_module/delete_module01.c>`__

Basic test for delete_module(2).

Install dummy_del_mod.ko and delete it with delete_module(2).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`skip_in_secureboot <tst_test>`
     - 1


.. raw:: html

    <hr>

delete_module02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/delete_module/delete_module02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

delete_module03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/delete_module/delete_module03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`skip_in_secureboot <tst_test>`
     - 1


.. raw:: html

    <hr>

dio_append
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/dio_append.c>`__

Appends zeroed data to a file using O_DIRECT while a child processes are
doing buffered reads after seeking to the end of the file and checks if the
buffer reads always see zero.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes (default 16)
   * - -w
     - Write size for each append (default 64K)
   * - -c
     - Number of appends (default 10000)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dio_read
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/dio_read.c>`__

Create a file using buffered writes while other processes are doing
O_DIRECT reads and check if the buffer reads always see zero.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of threads (default 8)
   * - -w
     - Size of writing blocks (default 32M)
   * - -r
     - Size of reading blocks (default 32M)
   * - -s
     - File size (default 128M)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dio_sparse
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/dio_sparse.c>`__

Create a sparse file using O_DIRECT while other processes are doing
buffered reads and check if the buffer reads always see zero.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of threads (default 16)
   * - -w
     - Size of writing blocks (default 1K)
   * - -s
     - Size of file (default 100M)
   * - -o
     - File offset (default 0)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dio_truncate
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/io/ltp-aiodio/dio_truncate.c>`__

This test is mixing direct I/O and truncate operations checking if they can
be used together at the same time. Multiple children are spawned to read a
file that is written to using direct I/O and truncated in a loop.

**Algorithm**

- Spawn multiple children which start to read on 'file'
- Parent start to fill and truncate 'file' many times with zero char when
  children are reading
- Parent start to fill and truncate a junk file many times with non-zero char

If no issues occur on direct IO/truncate operations and the file always
contains zero characters, test PASS. Otherwise, test will FAIL.

Test timeout defaults is 30 seconds.
Maximum runtime is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of threads (default 16)
   * - -s
     - Size of file (default 64K)
   * - -a
     - Number of appends (default 100)
   * - -c
     - Number of append & truncate (default 100)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dirtyc0w
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/dirtyc0w/dirtyc0w.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `4ceb5db9757a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4ceb5db9757a>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `19be0eaffa3a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=19be0eaffa3a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-5195 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-5195>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dirtyc0w_shmem
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/dirtyc0w_shmem/dirtyc0w_shmem.c>`__

This is a regression test for a write race that allowed unprivileged programs
to change readonly files located on tmpfs/shmem on the system using
userfaultfd "minor fault handling" (CVE-2022-2590).

Test timeout defaults is 30 seconds.
Maximum runtime is 120 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5535be309971 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5535be309971>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2022-2590 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-2590>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dirtypipe
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/dirtypipe/dirtypipe.c>`__

Proof-of-concept exploit for the Dirty Pipe
vulnerability (CVE-2022-0847) caused by an uninitialized
"pipe_buffer.flags" variable.  It demonstrates how to overwrite any
file contents in the page cache, even if the file is not permitted
to be written, immutable or on a read-only mount.

This exploit requires Linux 5.8 or later; the code path was made
reachable by commit f6dd975583bd ("pipe: merge
anon_pipe_buf*_ops").  The commit did not introduce the bug, it was
there before, it just provided an easy way to exploit it.

There are two major limitations of this exploit: the offset cannot
be on a page boundary (it needs to write one byte before the offset
to add a reference to this page to the pipe), and the write cannot
cross a page boundary.

Example: ./write_anything /root/.ssh/authorized_keys 1 $'\nssh-ed25519 AAA......\n'

Further explanation: https://dirtypipe.cm4all.com/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9d2231c5d74e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9d2231c5d74e>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2022-0847 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2022-0847>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup01.c>`__

Verify that dup(2) syscall executes successfully and allocates
a new file descriptor which refers to the same open file as oldfd.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup02.c>`__

Verify that dup(2) syscall fails with errno EBADF when called with
invalid value for oldfd argument.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

dup03
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup03.c>`__

Verify that dup(2) syscall fails with errno EMFILE when the per-process
limit on the number of open file descriptors has been reached.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup04
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup04.c>`__

Basic test for dup(2) of a system pipe descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup05
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup05.c>`__

Basic test for dup(2) of a named pipe descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup06
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup06.c>`__

Test for dup(2) syscall with max open file descriptors.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup07
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup/dup07.c>`__

Verify that the file descriptor created by dup(2) syscall has the same
access mode as the old one.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup201
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup201.c>`__

Negative tests for dup2() with bad fd (EBADF).

- First fd argument is less than 0
- First fd argument is getdtablesize()
- Second fd argument is less than 0
- Second fd argument is getdtablesize()


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

dup202
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup202.c>`__

Test whether the access mode are the same for both file descriptors.

Create file with mode, dup2, [change mode], check mode

- read only, dup2, read only ? "0444"
- write only, dup2, write only ? "0222"
- read/write, dup2 read/write ? "0666"
- read/write/execute, dup2, set read only, read only ? "0444"
- read/write/execute, dup2, set write only, write only ? "0222"
- read/write/execute, dup2, set read/write, read/write ? "0666"

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup203
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup203.c>`__

Testcase to check the basic functionality of dup2().

- Attempt to dup2() on an open file descriptor.
- Attempt to dup2() on a close file descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup204
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup204.c>`__

Test whether the inode number are the same for both file descriptors.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

dup205
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup205.c>`__

Negative test for dup2() with max open file descriptors.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup206
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup206.c>`__

If oldfd is a valid file descriptor, and newfd has the same value as oldfd,
then dup2() does nothing, and returns newfd.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup207
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup2/dup207.c>`__

Test whether the file offset are the same for both file descriptors.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

dup3_01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup3/dup3_01.c>`__

Testcase to check whether dup3() supports O_CLOEXEC flag.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

dup3_02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/dup3/dup3_02.c>`__

Test for various EINVAL error.

- oldfd is equal to newfd without using O_CLOEXEC flag
- oldfd is equal to newfd with using O_CLOEXEC flag
- flags contain an invalid value

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

endian_switch01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/switch/endian_switch01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_create01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_create/epoll_create01.c>`__

Verify that epoll_create return a nonnegative file descriptor on success.

The size argument informed the kernel of the number of file descriptors
that the caller expected to add to the epoll instance, but it is no longer
required.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_create02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_create/epoll_create02.c>`__

Verify that epoll_create returns -1 and set errno to EINVAL if size is not
greater than zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_create1_01
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_create1/epoll_create1_01.c>`__

Verify that epoll_create1 sets the close-on-exec flag for the returned
file descriptor with EPOLL_CLOEXEC.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_create1_02
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_create1/epoll_create1_02.c>`__

Verify that epoll_create1 returns -1 and set errno to EINVAL with an invalid
value specified in flags.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_ctl01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_ctl/epoll_ctl01.c>`__

Check the basic functionality of the epoll_ctl:

- When epoll_ctl succeeds to register fd on the epoll instance and associates
event with fd, epoll_wait will get registered fd and event correctly.
- When epoll_ctl succeeds to change event which is related to fd, epoll_wait
will get changed event correctly.
- When epoll_ctl succeeds to deregister fd from the epoll instance epoll_wait
won't get deregistered fd and event.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_ctl02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_ctl/epoll_ctl02.c>`__

Verify that epoll_ctl() fails with:

- EBADF if epfd is an invalid fd.
- EPERM if fd does not support epoll.
- EBADF if fd is an invalid fd.
- EINVAL if op is not supported.
- EINVAL if fd is the same as epfd.
- EINVAL if events is NULL.
- ENOENT if fd is not registered with EPOLL_CTL_DEL.
- ENOENT if fd is not registered with EPOLL_CTL_MOD.
- EEXIST if fd is already registered with EPOLL_CTL_ADD.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_ctl03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_ctl/epoll_ctl03.c>`__

Check that epoll_ctl returns zero with different combinations of events on
success.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_ctl04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_ctl/epoll_ctl04.c>`__

Verify that the maximum number of nesting allowed inside epoll sets is 5,
otherwise epoll_ctl fails with EINVAL.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_ctl05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_ctl/epoll_ctl05.c>`__

Verify that epoll_ctl() fails with ELOOP if fd refers to an epoll instance
and this EPOLL_CTL_ADD operation would result in a circular loop of epoll
instances monitoring one another.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_pwait01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_pwait/epoll_pwait01.c>`__

Basic test for epoll_pwait() and epoll_pwait2().

- With a sigmask a signal is ignored and the syscall safely waits until
  either a file descriptor becomes ready or the timeout expires.

- Without sigmask if signal arrives a syscall is iterrupted by a signal.
  The call should return -1 and set errno to EINTR.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_pwait02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_pwait/epoll_pwait02.c>`__

Basic test for epoll_pwait and epoll_pwait2. Checks if data avaiable in a
file descriptor are reported correctly in the syscall return value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_pwait03
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_pwait/epoll_pwait03.c>`__

Check that epoll_pwait and epoll_pwait2 timeouts correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - do_epoll_pwait()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_pwait04
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_pwait/epoll_pwait04.c>`__

Verify that, epoll_pwait() and epoll_pwait2() return -1 and set errno to
EFAULT with a sigmask points outside user's accessible address space.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

epoll_pwait05
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_pwait/epoll_pwait05.c>`__

Verify that, epoll_pwait2() return -1 and set errno to EINVAL with an
invalid timespec.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_wait01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait01.c>`__

Basic test for epoll_wait. Check that epoll_wait works for EPOLLOUT and
EPOLLIN events on an epoll instance and that struct epoll_event is set
correctly.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_wait02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait02.c>`__

Check that epoll_wait(2) timeouts correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - epoll_wait()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

epoll_wait03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait03.c>`__

Basic test for epoll_wait:

- epoll_wait fails with EBADF if epfd is not a valid file descriptor.
- epoll_wait fails with EINVAL if epfd is not an epoll file descriptor.
- epoll_wait fails with EINVAL if maxevents is less than zero.
- epoll_wait fails with EINVAL if maxevents is equal to zero.
- epoll_wait fails with EFAULT if the memory area pointed to by events is
  not accessible with write permissions.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_wait04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait04.c>`__

Check that a timeout equal to zero causes epoll_wait() to return immediately.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_wait05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait05.c>`__

Verify that epoll receives EPOLLRDHUP event when we hang a reading
half-socket we are polling on.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

epoll_wait06
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait06.c>`__

Verify that edge triggering is correctly handled by epoll, for both EPOLLIN
and EPOLLOUT.

**Algorithm**

- The file descriptors for non-blocking pipe are registered on an epoll
  instance.
- A pipe writer writes data on the write side of the pipe.
- A call to epoll_wait() is done that will return a EPOLLIN event.
- The pipe reader reads half of data from rfd.
- A call to epoll_wait() should hang because there's data left to read.
- The pipe reader reads remaining data from rfd.
- A call to epoll_wait() should return a EPOLLOUT event.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

epoll_wait07
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/epoll_wait/epoll_wait07.c>`__

Verify that EPOLLONESHOT is correctly handled by epoll_wait.
We open a channel, write in it two times and verify that EPOLLIN has been
received only once.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

event_generator
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/connectors/pec/event_generator.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

eventfd01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd01.c>`__

Verify read operation for eventfd fail with:

- EAGAIN when counter is zero on non blocking fd
- EINVAL when buffer size is less than 8 bytes

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd02.c>`__

Verify write operation for eventfd fail with:

- EAGAIN when counter is zero on non blocking fd
- EINVAL when buffer size is less than 8 bytes, or if an attempt is made to
write the value 0xffffffffffffffff

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd03.c>`__

Test whether readfd is set by select() when eventfd() counter value is
non-zero, then check if readfd is not set when eventfd() counter value is
zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd04.c>`__

Test whether writefd is set by select() when eventfd() counter value is
not the maximum value, then check if writefd is not set when eventfd()
counter value is maximum value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd05
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd05.c>`__

Test whether eventfd() counter update in child is reflected in the parent.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd06
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd/eventfd06.c>`__

Test whether counter overflow is detected and handled correctly.

It is not possible to directly overflow the counter using the
write() syscall. Overflows occur when the counter is incremented
from kernel space, in an IRQ context, when it is not possible to
block the calling thread of execution.

The AIO subsystem internally uses eventfd mechanism for
notification of completion of read or write requests. In this test
we trigger a counter overflow, by setting the counter value to the
max possible value initially. When the AIO subsystem notifies
through the eventfd counter, the counter overflows.

If the counter starts from an initial value of 0, it will
take decades for an overflow to occur. But since we set the initial
value to the max possible counter value, we are able to cause it to
overflow with a single increment.

When the counter overflows, the following is tested:

- POLLERR event occurs in poll() for the eventfd
- readfd_set/writefd_set is set in select() for the eventfd
- the counter value is UINT64_MAX

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_EVENTFD


.. raw:: html

    <hr>

eventfd2_01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd2/eventfd2_01.c>`__

This test verifies that eventfd2 correctly set FD_CLOEXEC flag on file when
EFD_CLOEXEC flag is used.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

eventfd2_02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd2/eventfd2_02.c>`__

This test verifies that eventfd2 correctly set O_NONBLOCK flag on file when
EFD_NONBLOCK flag is used.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

eventfd2_03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/eventfd2/eventfd2_03.c>`__

This test verifies that eventfd2 semaphore-like support is properly working.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

execl01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execl/execl01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`ulimit <tst_test>`
     - RLIMIT_STACK : RLIM_INFINITY


.. raw:: html

    <hr>

execle01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execle/execle01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

execlp01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execlp/execlp01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

execv01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execv/execv01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

execve01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

execve02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - execve_child
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execve03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

execve04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve04.c>`__

Attempt to execve(2) a file which is being opened by another process for
writing fails with ETXTBSY.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - execve_child
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execve05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve05.c>`__

This tests the functionality of the execve(2) system call by spawning
a few children, each of which would execute "execve_child" simultaneously,
and finally the parent ensures that they terminated correctly.

Test timeout is 3 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Numbers of children


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - execve_child
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execve06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execve/execve06.c>`__

Test that kernel adds dummy argv[0] if empty argument list was passed to
execve(). This fixes at least one CVE where userspace programs start to
process argument list blindly from argv[1] such as polkit pkexec
CVE-2021-4034.

See also https://lwn.net/Articles/883547/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `dcd46d897adb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=dcd46d897adb>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-4034 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-4034>`_




.. raw:: html

    <hr>

execveat01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execveat/execveat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - execveat_child
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execveat02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execveat/execveat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - execveat_errno
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execveat03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execveat/execveat03.c>`__


Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8db6c34f1dbc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8db6c34f1dbc>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `355139a8dba4 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=355139a8dba4>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_overlay <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - execveat_child
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

execvp01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/execvp/execvp01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

exit02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/exit/exit02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

exit_group01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/exit_group/exit_group01.c>`__

This test checks if exit_group() correctly ends a spawned child and all its
running threads.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

faccessat01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/faccessat/faccessat01.c>`__

Check the basic functionality of the faccessat() system call.

- faccessat() passes if dir_fd is file descriptor to the directory
  where the file is located and pathname is relative path of the file.

- faccessat() passes if dir_fd is a bad file descriptor and pathname is
  absolute path of the file.

- faccessat() passes if dir_fd is AT_FDCWD and pathname is interpreted
  relative to the current working directory of the calling process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

faccessat02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/faccessat/faccessat02.c>`__

- faccessat() fails with ENOTDIR if dir_fd is file descriptor to the file
  and pathname is relative path of the file.

- faccessat() fails with EBADF if dir_fd is invalid.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

faccessat201
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/faccessat2/faccessat201.c>`__

Check the basic functionality of faccessat2().

Minimum Linux version required is v5.8.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

faccessat202
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/faccessat2/faccessat202.c>`__

Test basic error handling of faccessat2 syscall:

- faccessat2() fails with EFAULT if pathname is a bad pathname point.
- faccessat2() fails with EINVAL if flags is -1.
- faccessat2() fails with EINVAL if mode is -1.
- faccessat2() fails with EBADF if dirfd is -1.
- faccessat2() fails with ENOTDIR if pathname is relative path to a
  file and dir_fd is file descriptor for this file.
- faccessat2() fails with EACCES if flags is AT_EACCESS and not using
  the effective user and group IDs.

Minimum Linux version required is v5.8.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fallocate03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fallocate/fallocate03.c>`__

Test fallocate() on sparse file for different offsets, with a total of 8 test cases

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fallocate04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fallocate/fallocate04.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -v
     - Turns on verbose mode


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fallocate05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fallocate/fallocate05.c>`__


Test timeout is 42 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fallocate06
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fallocate/fallocate06.c>`__

Tests misaligned fallocate()

Test scenario:

1. write() several blocks worth of data
2. fallocate() some more space (not aligned to FS blocks)
3. try to write() into the allocated space
4. deallocate misaligned part of file range written in step 1
5. read() the deallocated range and check that it was zeroed

Subtests:

- fill filesystem between step 2 and 3
- disable copy-on-write on test file
- combinations of above subtests

Test timeout is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e093c4be760e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e093c4be760e>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `6d4572a9d71d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6d4572a9d71d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`dev_min_size <tst_test>`
     - 1024
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify01.c>`__

Check that fanotify work for a file.

Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify02.c>`__

Check that fanotify work for children of a directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify03.c>`__

Check that fanotify permission events work.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - resource_files
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify04.c>`__

Check various fanotify special flags.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify05.c>`__

Check that fanotify overflow event is properly generated.

**Algorithm**
Generate enough events without reading them and check that overflow
event is generated.

Test timeout is 13 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify06.c>`__

Check that fanotify properly merges ignore mask of an inode and mountpoint.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8edc6e1688fc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8edc6e1688fc>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `d989903058a8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d989903058a8>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify07.c>`__

Check that fanotify permission events are handled properly on instance destruction.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify08
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify08.c>`__

Sanity check fanotify_init flag FAN_CLOEXEC by fcntl.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify09
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify09.c>`__

Check that fanotify handles events on children correctly when both parent and
subdir or mountpoint marks exist.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `54a307ba8d3c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=54a307ba8d3c>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `b469e7e47c8a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b469e7e47c8a>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `55bf882c7f13 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=55bf882c7f13>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `7372e79c9eb9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7372e79c9eb9>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `e730558adffb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e730558adffb>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify10
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify10.c>`__

Check that fanotify properly merges ignore mask of a mount mark
with a mask of an inode mark on the same group.  Unlike the
prototype test fanotify06, do not use FAN_MODIFY event for the
test mask, because it hides the bug.

Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9bdda4e9cf2d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9bdda4e9cf2d>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `2f02fd3fa13e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2f02fd3fa13e>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - fanotify_child
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify11
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify11.c>`__

After fanotify_init adds flags FAN_REPORT_TID,
check whether the program can accurately identify which thread id
in the multithreaded program triggered the event.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify12
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify12.c>`__

Validate that the newly introduced FAN_OPEN_EXEC mask functions as expected.
The idea is to generate a sequence of open related actions to ensure that
the correct event flags are being set depending on what event mask was
requested when the object was marked.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - fanotify_child
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify13
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify13.c>`__

Validate that the values returned within an event when FAN_REPORT_FID is
specified matches those that are obtained via explicit invocation to system
calls statfs(2) and name_to_handle_at(2).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c285a2f01d69 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c285a2f01d69>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `bc2473c90fca <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bc2473c90fca>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `c45beebfde34a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c45beebfde34a>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 5
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify14
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify14.c>`__

This test file has been designed to ensure that the fanotify
system calls fanotify_init(2) and fanotify_mark(2) return the
correct error code to the calling process when an invalid flag or
mask value has been specified in conjunction with FAN_REPORT_FID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ceaf69f8eadc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ceaf69f8eadc>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `8698e3bab4dd <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8698e3bab4dd>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `69562eb0bd3e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=69562eb0bd3e>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify15
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify15.c>`__

Test file that has been purposely designed to verify FAN_REPORT_FID
functionality while using newly defined dirent events.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f367a62a7cad <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f367a62a7cad>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify16
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify16.c>`__

Check fanotify directory entry modification events, events on child and
on self with group init flags:

- FAN_REPORT_DFID_NAME (dir fid + name)
- FAN_REPORT_DIR_FID   (dir fid)
- FAN_REPORT_DIR_FID | FAN_REPORT_FID   (dir fid + child fid)
- FAN_REPORT_DFID_NAME | FAN_REPORT_FID (dir fid + name + child fid)
- FAN_REPORT_DFID_NAME_TARGET (dir fid + name + created/deleted file fid)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify17
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify17.c>`__

Check that fanotify groups and marks limits are enforced correctly.
If user ns is supported, verify that global limit and per user ns
limits are both enforced.
Otherwise, we only check that global groups limit is enforced.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify18
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify18.c>`__

This set of tests is to ensure that the unprivileged listener feature of
fanotify is functioning as expected. The objective this test case file
is to validate whether any forbidden flags that are passed by an
unprivileged user return the correct error result.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify19
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify19.c>`__

This set of tests is to ensure that the unprivileged listener feature of
fanotify is functioning as expected. The objective of this test file is
to generate a sequence of events and ensure that the returned events
contain the limited values that an unprivileged listener is expected
to receive.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a8b98c808eab <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a8b98c808eab>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify20
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify20.c>`__

This source file contains a test case which ensures that the fanotify API
returns an expected error code when provided an invalid initialization flag
alongside FAN_REPORT_PIDFD. Additionally, it checks that the operability with
existing FAN_REPORT_* flags is maintained and functioning as intended.

NOTE: FAN_REPORT_PIDFD support was added in v5.15-rc1 in af579beb666a
("fanotify: add pidfd support to the fanotify API").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify21
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify21.c>`__

A test which verifies whether the returned struct
fanotify_event_info_pidfd in FAN_REPORT_PIDFD mode contains the
expected set of information.

NOTE: FAN_REPORT_PIDFD support was added in v5.15-rc1 in af579beb666a
("fanotify: add pidfd support to the fanotify API").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify22
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify22.c>`__

Check fanotify FAN_ERROR_FS events triggered by intentionally
corrupted filesystems:

- Generate a broken filesystem
- Start FAN_FS_ERROR monitoring group
- Make the file system notice the error through ordinary operations
- Observe the event generated

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `124e7c61deb2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=124e7c61deb2>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `76486b104168 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=76486b104168>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - debugfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify23
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify23.c>`__

Check evictable fanotify inode marks.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - ext2
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanotify24
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fanotify/fanotify24.c>`__

- Test fanotify pre-content events
- Test respond to permission/pre-content events with cutsom error code

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - resource_files
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fanout01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/packet/fanout01.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 180 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-15649 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15649>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `4971613c1639 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4971613c1639>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `008ba2a13f2d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=008ba2a13f2d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fchdir01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchdir/fchdir01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchdir02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchdir/fchdir02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

fchdir03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchdir/fchdir03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod01.c>`__

Verify that fchmod() can succeed to change the mode permissions of a file specified
by file descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod02.c>`__

Verify that, fchmod(2) will succeed to change the mode of a file/directory
set the sticky bit on it if invoked by root (uid = 0) process with
the following constraints:

- the process is not the owner of the file/directory
- the effective group ID or one of the supplementary group ID's of the
  process is equal to the group ID of the file/directory

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod03.c>`__

Verify that, fchmod(2) will succeed to change the mode of a file
and set the sticky bit on it if invoked by non-root (uid != 0)
process with the following constraints:

- the process is the owner of the file
- the effective group ID or one of the supplementary group ID's of the
  process is equal to the group ID of the file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod04.c>`__

Verify that, fchmod(2) will succeed to change the mode of a directory
and set the sticky bit on it if invoked by non-root (uid != 0) process
with the following constraints:

- the process is the owner of the directory
- the effective group ID or one of the supplementary group ID's of the
  process is equal to the group ID of the directory

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod05.c>`__

Verify that, fchmod(2) will succeed to change the mode of a directory
but fails to set the setgid bit on it if invoked by non-root (uid != 0)
process with the following constraints:

- The process is the owner of the directory.
- The effective group ID or one of the supplementary group ID's of the
  process is not equal to the group ID of the directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmod06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmod/fchmod06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmodat01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmodat/fchmodat01.c>`__

Check the basic functionality of the fchmodat() system call.

- fchmodat() passes if dir_fd is file descriptor to the directory
  where the file is located and pathname is relative path of the file.
- fchmodat() passes if pathname is absolute, then dirfd is ignored.
- fchmodat() passes if dir_fd is AT_FDCWD and pathname is interpreted
  relative to the current working directory of the calling process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmodat02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmodat/fchmodat02.c>`__

Tests basic error handling of the fchmodat() syscall.

- fchmodat() fails with ENOTDIR if dir_fd is file descriptor
  to the file and pathname is relative path of the file.
- fchmodat() fails with EBADF if dir_fd is invalid.
- fchmodat() fails with EFAULT if pathname points outside
  the accessible address space.
- fchmodat() fails with ENAMETOOLONG if path is too long.
- fchmodat() fails with ENOENT if pathname does not exist.
- fchmodat() fails with EINVAL if flag is invalid.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmodat2_01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmodat2/fchmodat2_01.c>`__

This test verifies that fchmodat2() syscall is properly working with
regular files, symbolic links and directories. AT_SYMLINK_NOFOLLOW is a
special feature that is blocked by VFS since 5d1f903f75a8 and any of its
usage on symlinks will raise EOPNOTSUPP.

Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5d1f903f75a8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5d1f903f75a8>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchmodat2_02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchmodat2/fchmodat2_02.c>`__

This test verifies that fchmodat2() syscall properly raises errors with
invalid values.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchown01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchown/fchown01.c>`__

Basic test for fchown(). Call fchown() on a fd and expect it to pass.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchown02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchown/fchown02.c>`__

Verify that fchown(2) invoked by super-user:

 - clears setuid and setgid bits set on an executable file
 - preserves setgid bit set on a non-group-executable file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchown03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchown/fchown03.c>`__

Verify that, fchown(2) succeeds to change the group of a file specified
by path when called by non-root user with the following constraints:

- euid of the process is equal to the owner of the file
- the intended gid is either egid, or one of the supplementary gids
  of the process.

Also verify that fchown() clears the setuid/setgid bits set on the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchown04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchown/fchown04.c>`__

Verify that:

1. fchown() returns -1 and sets errno to EPERM if the effective user id
   of process does not match the owner of the file and the process is
   not super user.
2. fchown() returns -1 and sets errno to EBADF if the file descriptor
   of the specified file is not valid.
3. fchown() returns -1 and sets errno to EROFS if the named file resides
   on a read-only file system.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

fchown05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchown/fchown05.c>`__

Verify that, fchown() succeeds to change the owner and group of a file
specified by file descriptor to any numeric owner(uid)/group(gid) values
when invoked by super-user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fchownat01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchownat/fchownat01.c>`__

Verify that fchownat() succeeds to change file's ownership if the file
descriptor is AT_FDCWD or set by opening a directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fchownat02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchownat/fchownat02.c>`__

Verify that fchownat() will operate on symbolic links when
AT_SYMLINK_NOFOLLOW is used.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fchownat03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fchownat/fchownat03.c>`__

Verify that fchownat(2) returns -1 and sets errno to:

- EACCES if there is no permission to access to the file.
- EBADF if the file descriptor of the specified file is not valid.
- EFAULT if the filename points outside of accessable address space.
- EINVAL if the flag is invalid.
- ELOOP if too many symbolic links were encountered in resolving filename.
- ENAMETOOLONG if the filename is too long.
- ENOENT if the specified file does not exist.
- ENOTDIR if the file descriptor is a file.
- EPERM if the effective user id of process does not match the owner of
  the file and the process is not super user.
- EROFS if the file is readonly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl05.c>`__

Basic test for fcntl(2) using F_GETLK argument.

If the lock could be placed, fcntl() does not actually place it, but
returns F_UNLCK in the l_type field of lock and leaves the other field
of the structure unchanged.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl08.c>`__

Basic test for fcntl(2) using F_SETFL with flags O_NDELAY | O_APPEND | O_NONBLOCK.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl12
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl12.c>`__

Tests basic error handling of the fcntl syscall.

- EMFILE when cmd is F_DUPFD and the per-process limit on the number of open
  file descriptors has been reached.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl13
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl13.c>`__

Tests basic error handling of the fcntl syscall.

- EFAULT when lock is outside your accessible address space
- EINVAL when cmd argument is not recognized by this kernel
- EINVAL when cmd argument is F_SETLK and flock.l_whence is not equal to
  SEET_CUR,SEEK_SET,SEEK_END
- EBADF when fd refers to an invalid file descriptor

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

fcntl14
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl14.c>`__

This test is checking fcntl() syscall locking mechanism between two
processes.
The test sets a random starting position on file using lseek(), it randomly
generates fcntl() parameters for parent and child and it verifies that
fcntl() will raise a blocking error on child when it's supposed to.

Test timeout is 8 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Total # operations to do (default 5000)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - nfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

fcntl15
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl15.c>`__

Check that file locks are removed when a file descriptor is closed, three
different tests are implemented.

Parent opens a file and duplicates the file descriptor, places locks using
both file descriptors then closes one descriptor, all locks should be
removed.

Open same file twice using open, place locks using both descriptors then
close one descriptor, all lock should be removed.

Open file twice, each in a different process, set the locks and the child
check the locks. Close the first file descriptor and have child check locks
again. Only locks set on first file descriptor should have been removed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl27
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl27.c>`__

Basic test for fcntl(2) using F_SETLEASE and F_RDLCK argument,
testing O_RDWR and O_WRONLY.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl29
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl29.c>`__

Basic test for fcntl(2) using F_DUPFD_CLOEXEC and getting FD_CLOEXEC.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl30
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl30.c>`__

Verify that, fetching and changing the capacity of a pipe works as
expected with fcntl(2) syscall using F_GETPIPE_SZ, F_SETPIPE_SZ arguments.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

fcntl33
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl33.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | tmpfs
       | ramfs
       | nfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl34
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl34.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl35
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl35.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `086e774a57fb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=086e774a57fb>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl36
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl36.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fcntl37
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl37.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_RESOURCE)


.. raw:: html

    <hr>

fcntl38
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl38.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_DNOTIFY=y


.. raw:: html

    <hr>

fcntl39
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fcntl/fcntl39.c>`__

Check that dnotify DN_RENAME event is reported only on rename inside same parent.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_DNOTIFY=y


.. raw:: html

    <hr>

fdatasync03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fdatasync/fdatasync03.c>`__


Test timeout is 15 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fgetxattr01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fgetxattr/fgetxattr01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fgetxattr02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fgetxattr/fgetxattr02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_devfs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

fgetxattr03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fgetxattr/fgetxattr03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

finit_module01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/finit_module/finit_module01.c>`__

Basic finit_module() tests.

**Algorithm**

Inserts a simple module after opening and mmaping the module file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`skip_in_secureboot <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

finit_module02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/finit_module/finit_module02.c>`__

Basic finit_module() failure tests.

**Algorithm**

Tests various failure scenarios for finit_module().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `032146cda855 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=032146cda855>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `39d637af5aa7 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=39d637af5aa7>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

flistxattr01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flistxattr/flistxattr01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

flistxattr02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flistxattr/flistxattr02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

flistxattr03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flistxattr/flistxattr03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

flock01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock01.c>`__

Basic test for flock(2), uses LOCK_SH, LOCK_UN, LOCK_EX locks.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

flock02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock02.c>`__

Verify flock(2) returns -1 and set proper errno:

- EBADF if the file descriptor is invalid
- EINVAL if the argument operation does not include LOCK_SH,LOCK_EX,LOCK_UN
- EINVAL if an invalid combination of locking modes is used i.e LOCK_SH with LOCK_EX
- EWOULDBLOCK if the file is locked and the LOCK_NB flag was selected

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

flock03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock03.c>`__

Verify that flock(2) cannot unlock a file locked by another task.

Fork a child processes. The parent flocks a file with LOCK_EX. Child waits
for that to happen, then checks to make sure it is locked.  Child then
tries to unlock the file. If the unlock succeeds, the child attempts to
lock the file with LOCK_EX. The test passes if the child is able to lock
the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

flock04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock04.c>`__

Test verifies that flock() behavior with different locking combinations along
with LOCK_SH and LOCK_EX:

- flock() succeeded in acquiring shared lock on shared lock file.
- flock() failed to acquire exclusive lock on shared lock file.
- flock() failed to acquire shared lock on exclusive lock file.
- flock() failed to acquire exclusive lock on exclusive lock file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

flock06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock06.c>`__

Test verifies that flock locks held on one file descriptor conflict with
flock locks held on a different file descriptor.

The process opens two file descriptors on the same file.  It acquires
an exclusive flock on the first descriptor, checks that attempting to
acquire an flock on the second descriptor fails.  Then it removes the
first descriptor's lock and attempts to acquire an exclusive lock on
the second descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

flock07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/flock/flock07.c>`__

Verify that flock(2) fails with errno EINTR when waiting to acquire a lock,
and the call is interrupted by a signal.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork01.c>`__

This test verifies that fork returns without error and that it returns the
pid of the child.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork03.c>`__

Check that child process can use a large text space and do a large number
of operations. In this situation, check for pid == 0 in child and check
for pid > 0 in parent after wait.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

fork04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork04.c>`__

This test verifies that parent process shares environ variables with the
child and that child doesn't change parent's environ variables.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork05.c>`__

This test verifies that LDT is propagated correctly from parent process to
the child process.

On Friday, May 2, 2003 at 09:47:00AM MST, Ulrich Drepper wrote:

 Robert Williamson wrote:

 I'm getting a SIGSEGV with one of our tests, fork05.c, that apparently
 you wrote (attached below).  The test passes on my 2.5.68 machine running
 SuSE 8.0 (glibc 2.2.5 and Linuxthreads), however it segmentation faults on
 RedHat 9 running 2.5.68.  The test seems to "break" when it attempts to run
 the assembly code....could you take a look at it?

 There is no need to look at it, I know it cannot work anymore on recent
 systems.  Either change all uses of %gs to %fs or skip the entire patch
 if %gs has a nonzero value.

On Sat, Aug 12, 2000 at 12:47:31PM -0700, Ulrich Drepper wrote:

 Ever since the %gs handling was fixed in the 2.3.99 series the
 appended test program worked.  Now with 2.4.0-test6 it's not working
 again.  Looking briefly over the patch from test5 to test6 I haven't
 seen an immediate candidate for the breakage.  It could be missing
 propagation of the LDT to the new process (and therefore an invalid
 segment descriptor) or simply clearing %gs.

 Anyway, this is what you should see and what you get with test5:

 a = 42
 %gs = 0x0007
 %gs = 0x0007
 a = 99

 This is what you get with test6:

 a = 42
 %gs = 0x0007
 %gs = 0x0000
 <SEGFAULT>

 If somebody is actually creating a test suite for the kernel, please
 add this program.  It's mostly self-contained.  The correct handling
 of %gs is really important since glibc 2.2 will make heavy use of it.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

fork07
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork07.c>`__

Check that all children inherit parent's file descriptor.

Parent opens a file and forks children. Each child reads a byte and checks
that the value is correct. Parent checks that correct number of bytes was
consumed from the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork08
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork08.c>`__

Check that the parent's file descriptors will not be affected by being
closed in the child.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork10
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork10.c>`__

This test verifies inheritance of file descriptors from parent to child
process. We open a file from parent, then we check if file offset changes
accordingly with file descriptor usage.

**Algorithm**

Test steps are the following:

- create a file made in three parts -> | aa..a | bb..b | cc..c |
- from parent, open the file
- from child, move file offset after the first part
- from parent, read second part and check if it's | bb..b |
- from child, read third part and check if it's | cc..c |

Test passes if we were able to read the correct file parts from parent and
child.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fork13
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork13.c>`__

A race in pid generation that causes pids to be reused immediately

From the mainline commit
5fdee8c4a5e1 ("pids: fix a race in pid generation that causes pids to be reused immediately")

A program that repeatedly forks and waits is susceptible to having
the same pid repeated, especially when it competes with another
instance of the same program.  This is really bad for bash
implementation.  Furthermore, many shell scripts assume that pid
numbers will not be used for some length of time.

**Race Description** ::

   A                                   B

   // pid == offset == n               // pid == offset == n + 1
   test_and_set_bit(offset, map->page)
                                       test_and_set_bit(offset, map->page);
                                       pid_ns->last_pid = pid;
   pid_ns->last_pid = pid;
                                       // pid == n + 1 is freed (wait())

                                       // Next fork()...
                                       last = pid_ns->last_pid; // == n
                                       pid = last + 1;

Test timeout defaults is 30 seconds.
Maximum runtime is 600 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5fdee8c4a5e1 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5fdee8c4a5e1>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/pid_max


.. raw:: html

    <hr>

fork14
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork14.c>`__

This test is a reproducer for kernel 3.5:
7edc8b0ac16c ("mm/fork: fix overflow in vma length when copying mmap on clone")

Since VMA length in dup_mmap() is calculated and stored in a unsigned
int, it will overflow when length of mmaped memory > 16 TB. When
overflow occurs, fork will incorrectly succeed. The patch above fixed it.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `7edc8b0ac16c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7edc8b0ac16c>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_abi_bits <tst_test>`
     - 64


.. raw:: html

    <hr>

fork_procs
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fork/fork_procs.c>`__

This test spawns multiple processes using fork() and it checks if wait()
returns the right PID once they end up.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes to spawn




.. raw:: html

    <hr>

fpathconf01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fpathconf/fpathconf01.c>`__

Check the basic functionality of the fpathconf(2) system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fremovexattr01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fremovexattr/fremovexattr01.c>`__


Test timeout is 12 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fremovexattr02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fremovexattr/fremovexattr02.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fs_fill
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/fs_fill/fs_fill.c>`__


Test timeout is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`dev_min_size <tst_test>`
     - 1024
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsconfig01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsconfig/fsconfig01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsconfig02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsconfig/fsconfig02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsconfig03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsconfig/fsconfig03.c>`__

Test for CVE-2022-0185.

References links:

- https://www.openwall.com/lists/oss-security/2022/01/25/14
- https://github.com/Crusaders-of-Rust/CVE-2022-0185


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `722d94847de29 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=722d94847de29>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2022-0185 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-0185>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsetxattr01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsetxattr/fsetxattr01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsetxattr02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsetxattr/fsetxattr02.c>`__

Verify basic fsetxattr(2) syscall functionality:

- Set attribute to a regular file, fsetxattr(2) should succeed.
- Set attribute to a directory, fsetxattr(2) should succeed.
- Set attribute to a symlink which points to the regular file,
  fsetxattr(2) should return -1 and set errno to EEXIST.
- Set attribute to a FIFO, fsetxattr(2) should return -1 and set
  errno to EPERM.
- Set attribute to a char special file, fsetxattr(2) should
  return -1 and set errno to EPERM.
- Set attribute to a block special file, fsetxattr(2) should
  return -1 and set errno to EPERM.
- Set attribute to a UNIX domain socket, fsetxattr(2) should
  return -1 and set errno to EPERM.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_devfs <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - brd


.. raw:: html

    <hr>

fsmount01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsmount/fsmount01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsmount02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsmount/fsmount02.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsopen01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsopen/fsopen01.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsopen02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsopen/fsopen02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fspick01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fspick/fspick01.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fspick02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fspick/fspick02.c>`__


Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsplough
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/fsplough/fsplough.c>`__

Write data into a test file using various methods and verify that file
contents match what was written.

Test timeout defaults is 30 seconds.
Maximum runtime is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -c
     - Number of write loops (default: loop for 30 seconds)
   * - -d
     - Path to working directory
   * - -W
     - Use direct I/O for writing
   * - -R
     - Use direct I/O for reading


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fstat02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fstat/fstat02.c>`__

Tests if fstat() returns correctly and reports correct file information
using the stat structure.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fstat03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fstat/fstat03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fstatfs01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fstatfs/fstatfs01.c>`__

Verify that fstatfs() syscall executes successfully for all
available filesystems.

Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fstatfs02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fstatfs/fstatfs02.c>`__

Testcase to check if fstatfs() sets errno correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsx-linux
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/fsx-linux/fsx-linux.c>`__

This is a complete rewrite of the old fsx-linux tool, created by
NeXT Computer, Inc. and Apple Computer, Inc. between 1991 and 2001,
then adapted for LTP. Test is actually a file system exerciser: we bring a
file and randomly write operations like read/write/map read/map write and
truncate, according with input parameters. Then we check if all of them
have been completed.

Test timeout is 1800 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Maximum size in MB of the test file(s) (default 262144)
   * - -o
     - Maximum size for single operation (default 65536)
   * - -N
     - Total # operations to do (default 1000)
   * - -w
     - Write memory page alignment (default 1)
   * - -r
     - Read memory page alignment (default 1)
   * - -t
     - Truncate memory page alignment (default 1)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsync01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsync/fsync01.c>`__


Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsync02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsync/fsync02.c>`__


Test timeout is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsync03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsync/fsync03.c>`__

Verify that, fsync(2) returns -1 and sets errno to

- EINVAL if calling fsync() on a pipe(fd).
- EINVAL if calling fsync() on a socket(fd).
- EBADF if calling fsync() on a closed fd.
- EBADF if calling fsync() on an invalid fd.
- EINVAL if calling fsync() on a fifo(fd).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

fsync04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fsync/fsync04.c>`__


Test timeout is 17 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ftruncate01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ftruncate/ftruncate01.c>`__

Verify that, ftruncate() succeeds to truncate a file to a certain length,
if the file previously is smaller than the truncated size, ftruncate()
shall increase the size of the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ftruncate03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ftruncate/ftruncate03.c>`__

Verify that ftruncate(2) system call returns appropriate error number:

1. EINVAL -- the file is a socket
2. EINVAL -- the file descriptor was opened with O_RDONLY
3. EINVAL -- the length is negative
4. EBADF -- the file descriptor is invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ftruncate04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ftruncate/ftruncate04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_MANDATORY_FILE_LOCKING=y
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

futex_cmp_requeue01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_cmp_requeue01.c>`__

Verify the basic functionality of futex(FUTEX_CMP_REQUEUE).

futex(FUTEX_CMP_REQUEUE) can wake up the number of waiters specified
by val argument and then requeue the number of waiters limited by val2
argument (i.e. move some remaining waiters from uaddr to uaddr2 address).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_cmp_requeue02
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_cmp_requeue02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2018-6927 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-6927>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `fbe0e839d1e2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fbe0e839d1e2>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wait01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wait02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wait03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wait04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wait05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - futex_wait()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

futex_wait_bitset01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wait_bitset01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_waitv01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_waitv01.c>`__

This test verifies EINVAL for futex_waitv syscall.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.16


.. raw:: html

    <hr>

futex_waitv02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_waitv02.c>`__

This test verifies futex_waitv syscall using private data.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of futex (default 30)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.16
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

futex_waitv03
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_waitv03.c>`__

This test verifies futex_waitv syscall using shared data.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of futex (default 30)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.16
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

futex_wake01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wake01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wake02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wake02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wake03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wake03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

futex_wake04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/futex/futex_wake04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

get_mempolicy01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/get_mempolicy/get_mempolicy01.c>`__

Verify that get_mempolicy() returns a proper return value and errno for various cases.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

get_mempolicy02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/get_mempolicy/get_mempolicy02.c>`__

Verify that get_mempolicy() returns a proper return errno for failure cases.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getaddrinfo_01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/lib6/getaddrinfo_01.c>`__

Basic getaddrinfo() tests.

The test adds LTP specific addresses and names to /etc/hosts to avoid
DNS, hostname setup issues and conflicts with existing configuration.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getcontext01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcontext/getcontext01.c>`__

Basic test for getcontext().

Calls a getcontext() then jumps back with a setcontext().

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getcpu01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcpu/getcpu01.c>`__

The test process is affined to a CPU. It then calls getcpu and
checks that the CPU and node (if supported) match the expected
values.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getcpu02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcpu/getcpu02.c>`__

Verify that getcpu(2) fails with EFAULT if cpu_id or node_id points outside
the calling process address space.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getcwd01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcwd/getcwd01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getcwd02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcwd/getcwd02.c>`__

Testcase to check the basic functionality of the getcwd(2) system call.

1. getcwd(2) works fine if buf and size are valid.
2. getcwd(2) works fine if buf points to NULL and size is set to 0.
3. getcwd(2) works fine if buf points to NULL and size is greater than strlen(path).

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getcwd03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcwd/getcwd03.c>`__

Testcase to check the basic functionality of the getcwd(2)
system call on a symbolic link.

**Algorithm**

1. create a directory, and create a symbolic link to it at the
   same directory level.
2. get the working directory of a directory, and its pathname.
3. get the working directory of a symbolic link, and its pathname,
   and its readlink info.
4. compare the working directories and link information.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getcwd04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getcwd/getcwd04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_cpus <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getdents01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getdents/getdents01.c>`__


Basic getdents() test that checks if directory listing is correct and
complete.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getdents02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getdents/getdents02.c>`__

Verify that:

  - getdents() fails with EBADF if file descriptor fd is invalid
  - getdents() fails with EINVAL if result buffer is too small
  - getdents() fails with ENOTDIR if file descriptor does not refer to a directory
  - getdents() fails with ENOENT if directory was unlinked()
  - getdents() fails with EFAULT if argument points outside the calling process's address space

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getdomainname01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getdomainname/getdomainname01.c>`__

Basic test for getdomainname(2)

This is a Phase I test for the getdomainname(2) system call.
It is intended to provide a limited exposure of the system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getegid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getegid/getegid01.c>`__

This test checks if getegid() returns the effective group id.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getegid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getegid/getegid02.c>`__

This test checks if getegid() returns the same effective group given by
passwd entry via getpwuid().

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

geteuid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/geteuid/geteuid01.c>`__

Check the basic functionality of the geteuid() system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

geteuid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/geteuid/geteuid02.c>`__

Check that geteuid() return value matches value from /proc/self/status.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getgid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getgid/getgid01.c>`__

Call getgid() and expects that the gid returned correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

getgid03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getgid/getgid03.c>`__

Testcase to check the basic functionality of getgid().

**Algorithm**

For functionality test the return value from getgid() is compared to passwd
entry.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

gethostbyname_r01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gethostbyname_r/gethostbyname_r01.c>`__

Test for GHOST: glibc vulnerability (CVE-2015-0235).

https://www.qualys.com/research/security-advisories/GHOST-CVE-2015-0235.txt

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`glibc-git <tst_tag>`
     - `d5dd6189d506 <https://sourceware.org/git/?p=glibc.git;a=commit;h=d5dd6189d506>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2015-0235 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2015-0235>`_




.. raw:: html

    <hr>

gethostid01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gethostid/gethostid01.c>`__

Test the basic functionality of the sethostid() and gethostid() system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

gethostname01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gethostname/gethostname01.c>`__

Test is checking that gethostname() succeeds.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

gethostname02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gethostname/gethostname02.c>`__

Verify that gethostname(2) fails with

- ENAMETOOLONG when len is smaller than the actual size

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getitimer01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getitimer/getitimer01.c>`__

Check that a correct call to getitimer() succeeds.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getitimer02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getitimer/getitimer02.c>`__

Check that getitimer() call fails:

1. EFAULT with invalid itimerval pointer
2. EINVAL when called with an invalid first argument

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpagesize01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpagesize/getpagesize01.c>`__

Verify that getpagesize(2) returns the number of bytes in a
memory page as expected.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpeername01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpeername/getpeername01.c>`__

Verify that getpeername() returns the proper errno for various failure cases:

- EBADF on invalid address.
- ENOTSOCK on socket opened on /dev/null.
- ENOTCONN on socket not connected.
- EINVAL on negative addrlen.
- EFAULT on invalid addr/addrlen pointers.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpgid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpgid/getpgid01.c>`__

Verify the basic functionality of getpgid(2) syscall.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpgid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpgid/getpgid02.c>`__

Verify that getpgid(2) fails with errno ESRCH when
pid does not match any process.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpgrp01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpgrp/getpgrp01.c>`__

Verify that getpgrp(2) syscall executes successfully.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpid/getpid01.c>`__

Verify that getpid() system call returns process ID in range <2, PID_MAX>.

Test timeout is 1 seconds.




.. raw:: html

    <hr>

getpid02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpid/getpid02.c>`__

Check that:

- fork() in parent returns the same pid as getpid() in child
- getppid() in child returns the same pid as getpid() in parent

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getppid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getppid/getppid01.c>`__

Test whether parent process id that getppid() returns is out of range.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getppid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getppid/getppid02.c>`__

Check that getppid() in child returns the same pid as getpid() in parent.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpriority01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpriority/getpriority01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getpriority02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getpriority/getpriority02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrandom01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrandom/getrandom01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrandom02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrandom/getrandom02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrandom03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrandom/getrandom03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrandom04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrandom/getrandom04.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrandom05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrandom/getrandom05.c>`__

Verify that getrandom(2) fails with

- EFAULT when buf address is outside the accessible address space
- EINVAL when flag is invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

getrlimit01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrlimit/getrlimit01.c>`__

Verify that getrlimit(2) call will be successful for all possible resource
types.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrlimit02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrlimit/getrlimit02.c>`__

Verify that, getrlimit(2) returns -1 and sets errno to 

- EFAULT if an invalid address is given for address parameter.
- EINVAL if an invalid resource type (RLIM_NLIMITS is a out of
  range resource type) is passed.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrlimit03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrlimit/getrlimit03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrusage01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrusage/getrusage01.c>`__

Test that getrusage() with RUSAGE_SELF and RUSAGE_CHILDREN succeeds.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getrusage02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrusage/getrusage02.c>`__

Verify that getrusage() fails with:

- EINVAL with invalid who
- EFAULT with invalid usage pointer

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

getrusage03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrusage/getrusage03.c>`__

Test ru_maxrss behaviors in struct rusage.

This test program is backported from upstream commit: 1f10206cf8e9, which
fills ru_maxrss value in struct rusage according to rss hiwater mark. To
make sure this feature works correctly, a series of tests are executed in
this program.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `1f10206cf8e9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1f10206cf8e9>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - resource
   * -  :c:struct:`min_mem_avail <tst_test>`
     - 512
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_IPC_LOCK)
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getrusage03_child
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getrusage/getrusage03_child.c>`__

Child program executed by getrusage03.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getsid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getsid/getsid01.c>`__

Verify that session IDs returned by getsid() (with argument pid=0)
are same in parent and child process.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getsid02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getsid/getsid02.c>`__

Verify that getsid(2) fails with ESRCH errno when there is no
process found with process ID pid.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getsockname01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getsockname/getsockname01.c>`__

Verify that getsockname() returns the proper errno for various failure cases:

- EBADF on a not open file
- ENOTSOCK on a file descriptor not linked to a socket
- EFAULT on invalid socket buffer o invalid socklen
- EINVALI on an invalid addrlen

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getsockopt01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getsockopt/getsockopt01.c>`__

Verify that getsockopt() returns the proper errno for various failure cases:

- EBADF on a not open file
- ENOTSOCK on a file descriptor not linked to a socket
- EFAULT on invalid address of value or length
- EOPNOTSUPP on invalid option name or protocol
- EINVAL on an invalid optlen

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getsockopt02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getsockopt/getsockopt02.c>`__

Test getsockopt(2) for retrieving peer credentials (SO_PEERCRED).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

gettid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gettid/gettid01.c>`__

This test checks if parent pid is equal to tid in single-threaded
application.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

gettid02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gettid/gettid02.c>`__

This test spawns multiple threads, then check for each one of them if the
parent ID is different AND if the thread ID is different from all the other
spwaned threads.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

gettimeofday01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gettimeofday/gettimeofday01.c>`__

Test for gettimeofday error.

- EFAULT: tv pointed outside the accessible address space
- EFAULT: tz pointed outside the accessible address space
- EFAULT: both tv and tz pointed outside the accessible address space

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

gettimeofday02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/gettimeofday/gettimeofday02.c>`__

Check if gettimeofday() is monotonous during 10s:

- Call gettimeofday() to get a t1 (fist value)
- Call it again to get t2, see if t2 < t1, set t2 = t1, repeat for 10 sec

Test timeout defaults is 30 seconds.
Maximum runtime is 10 seconds.




.. raw:: html

    <hr>

getuid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getuid/getuid01.c>`__

Check the basic functionality of the getuid() system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getuid03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getuid/getuid03.c>`__

Check that getuid() return value matches value from /proc/self/status.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

getxattr01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getxattr/getxattr01.c>`__

Basic tests for getxattr(2) and make sure getxattr(2) handles error
conditions correctly.

1. Get an non-existing attribute, getxattr(2) should return -1 and set errno
   to ENODATA.
2. Buffer size is smaller than attribute value size, getxattr(2) should
   return -1 and set errno to ERANGE.
3. Get attribute, getxattr(2) should succeed, and the attribute got by
   getxattr(2) should be same as the value we set.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

getxattr02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getxattr/getxattr02.c>`__

In the user.* namespace, only regular files and directories can
have extended attributes. Otherwise getxattr(2) will return -1
and set errno to ENODATA.

There are 4 test cases:

- Get attribute from a FIFO, setxattr(2) should return -1 and
  set errno to ENODATA
- Get attribute from a char special file, setxattr(2) should
  return -1 and set errno to ENODATA
- Get attribute from a block special file, setxattr(2) should
  return -1 and set errno to ENODATA
- Get attribute from a UNIX domain socket, setxattr(2) should
  return -1 and set errno to ENODATA

Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | ramfs
       | nfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getxattr03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getxattr/getxattr03.c>`__

An empty buffer of size zero can be passed into getxattr(2) to
return the current size of the named extended attribute.

Test timeout is 14 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | tmpfs
       | ramfs
       | nfs
       | vfat
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getxattr04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getxattr/getxattr04.c>`__

This is a regression test for the race between getting an existing
xattr and setting/removing a large xattr.  This bug leads to that
getxattr() fails to get an existing xattr and returns ENOATTR in xfs
filesystem.

This bug has been fixed in:
5a93790d4e2d ("xfs: remove racy hasattr check from attr ops")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5a93790d4e2d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5a93790d4e2d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - xfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

getxattr05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/getxattr/getxattr05.c>`__

This test verifies that:

- Without a user namespace, getxattr(2) should get same data when
  acquiring the value of system.posix_acl_access twice.
- With/Without mapped root UID in a user namespaces, getxattr(2) should
  get same data when acquiring the value of system.posix_acl_access twice.

This issue included by getxattr05 has been fixed in kernel:
82c9a927bc5d ("getxattr: use correct xattr length")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `82c9a927bc5d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=82c9a927bc5d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

hugefallocate01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugefallocate/hugefallocate01.c>`__

It tests alignment of fallocate arguments. fallocate will take non-huge
page aligned offsets and addresses.  However, operations are only
performed on huge pages.  This is different that than fallocate
behavior in "normal" filesystems.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugefallocate02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugefallocate/hugefallocate02.c>`__

It tests basic fallocate functionality in hugetlbfs. Preallocate huge
pages to a file in hugetlbfs, and then remove the pages via hole punch.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugefork01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugefork/hugefork01.c>`__

This checks copy-on-write semantics, specifically the semantics of a
MAP_PRIVATE mapping across a fork().  Some versions of the powerpc
kernel had a bug in huge_ptep_set_wrprotect() which would fail to
flush the hash table after setting the write protect bit in the parent's
page tables, thus allowing the parent to pollute the child's mapping.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `86df86424939 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=86df86424939>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugefork02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugefork/hugefork02.c>`__

Test shared memory behavior when multiple threads are attached to a
segment. A segment is created and then children are spawned which
attach, write, read (verify), and detach from the shared memory segment.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 5, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -H
     - Location of hugetlbfs, i.e.  -H /var/hugetlbfs
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugemmap02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -H
     - Location of hugetlbfs, i.e.  -H /var/hugetlbfs
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugemmap04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -H
     - Location of hugetlbfs, i.e.  -H /var/hugetlbfs
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugemmap05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Setup hugepages from sysfs
   * - -m
     - Reserve hugepages by shmget
   * - -a
     - Number of overcommint hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS


.. raw:: html

    <hr>

hugemmap06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap06.c>`__

There is a race condition if we map a same file on different processes.
Region tracking is protected by mmap_sem and hugetlb_instantiation_mutex.
When we do mmap, we don't grab a hugetlb_instantiation_mutex, but only
mmap_sem (exclusively).  This doesn't prevent other tasks from modifying
the region structure, so it can be modified by two processes concurrently.

This bug was fixed on stable kernel by commits:

f522c3ac00a4 (mm, hugetlb: change variable name reservations to resv)
9119a41e9091 (mm, hugetlb: unify region structure handling)
7b24d8616be3 (mm, hugetlb: fix race in region tracking)
1406ec9ba6c6 (mm, hugetlb: improve, cleanup resv_map parameters)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f522c3ac00a4 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f522c3ac00a4>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `9119a41e9091 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9119a41e9091>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `7b24d8616be3 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7b24d8616be3>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `1406ec9ba6c6 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1406ec9ba6c6>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - (50+1)*5, TST_NEEDS


.. raw:: html

    <hr>

hugemmap07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap07.c>`__

Certain kernels have a bug where brk() does not perform the same
checks that a MAP_FIXED mmap() will, allowing brk() to create a
normal page VMA in a hugepage only address region. This can lead
to oopses or other badness.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_D


.. raw:: html

    <hr>

hugemmap08
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap08.c>`__

Some kernel versions after hugepage demand allocation was added used a
dubious heuristic to check if there was enough hugepage space available
for a given mapping.  The number of not-already-instantiated pages in
the mapping was compared against the total hugepage free pool. It was
very easy to confuse this heuristic into overcommitting by allocating
hugepage memory in chunks, each less than the total available pool size
but together more than available.  This would generally lead to OOM
SIGKILLs of one process or another when it tried to instantiate pages
beyond the available pool.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - PATH_OC_HPAGES


.. raw:: html

    <hr>

hugemmap09
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap09.c>`__

Test sanity of cow optimization on page cache. If a page in page cache
has only 1 ref count, it is mapped for a private mapping directly and
is overwritten freely, so next time we access the page, we can see
corrupt data.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap10
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap10.c>`__

This Test perform mmap, munmap and write operation on hugetlb file
based mapping. Mapping can be shared or private. and it checks for
Hugetlb counter (Total, Free, Reserve, Surplus) in /proc/meminfo and
compare them with expected (calculated) value. if all checks are
successful, the test passes.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | PATH_OC_HPAGES
       | PATH_NR_HPAGES


.. raw:: html

    <hr>

hugemmap11
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap11.c>`__

This Test perform Direct Write/Read from/To hugetlbfs file
which is mapped to process address space. The test is checking if it
succeeds and data written or read is not corrupted.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap12
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap12.c>`__

fadvise() on some kernels can cause the reservation counter to get
corrupted. The problem is that the patches are allocated for the
reservation but not faulted in at the time of allocation. The counters
do not get updated and effectively "leak". This test identifies whether
the kernel is vulnerable to the problem or not. It's fixed in kernel
by commit f2deae9d4e70793568ef9e85d227abb7bef5b622.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f2deae9d4e70 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f2deae9d4e70>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap13
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap13.c>`__

On some old ppc64 kernel, when hpage is mmaped on 32 bit boundary and
normal page below it, it triggers the bug caused by off-by-one error.

WARNING: The offsets and addresses used within are specifically
calculated to trigger the bug as it existed. Don't mess with them
unless you *really* know what you're doing.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9a94c5793a7b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9a94c5793a7b>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap14
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap14.c>`__

On some old ppc64 kernel, when huge page is mapped at below touching
32 bit boundary (4GB - hpage_size), and normal page is mmaped
at just above it, it triggers a bug caused by off-by-one error.

WARNING: The offsets and addresses used within are specifically
calculated to trigger the bug as it existed.  Don't mess with them
unless you *really* know what you're doing.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9a94c5793a7b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9a94c5793a7b>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap15
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap15.c>`__

Older ppc64 kernels don't properly flush dcache to icache before
giving a cleared page to userspace.  With some exceedingly
hairy code, this attempts to test for this bug.

This test will never trigger (obviously) on machines with coherent
icache and dcache (including x86 and POWER5).  On any given run,
even on a buggy kernel there's a chance the bug won't trigger -
either because we don't get the same physical page back when we
remap, or because the icache happens to get flushed in the interim.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `cbf52afdc0eb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cbf52afdc0eb>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap16
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap16.c>`__

madvise() on some kernels can cause the reservation counter to get
corrupted. The problem is that the patches are allocated
for the reservation but not faulted in at the time of allocation. The
counters do not get updated and effectively "leak". This test
identifies whether the kernel is vulnerable to the problem or not.
It is fixed in kernel by commit f2deae9d4e70

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f2deae9d4e70 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f2deae9d4e70>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap17
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap17.c>`__

At one stage, a misconversion of hugetlb_vmtruncate_list to a prio_tree
meant that on 32-bit machines, certain combinations of mapping and
truncations could truncate incorrect pages, or overwrite pmds from
other VMAs, triggering BUG_ON()s or other wierdness.

Test adapted from an example by Kenneth Chen <kenneth.w.chen@intel.com>

WARNING: The offsets and addresses used within are specifically
calculated to trigger the bug as it existed.  Don't mess with them
unless you *really* know what you're doing.

The kernel bug in question was fixed with commit
856fc2950555.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `856fc2950555 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=856fc2950555>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap18
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap18.c>`__

Just as normal mmap()s can't have an address, length or offset which
is not page aligned, so hugepage mmap()s can't have an address, length
or offset with is not hugepage aligned.

However, from time to time when the various mmap() /
get_unmapped_area() paths are updated, somebody misses one of the
necessary checks for the hugepage paths.  This testcase ensures
that attempted hugepage mappings with parameters which are not
correctly hugepage aligned are rejected.

However starting with 3.10-rc1, length passed in mmap() doesn't need
to be aligned because commit af73e4d9506d3b797509f3c030e7dcd554f7d9c4
added ALIGN() to kernel side, in mmap_pgoff(), when mapping huge page
files.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `af73e4d9506d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=af73e4d9506d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap19
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap19.c>`__

At one stage, a misconversion of hugetlb_vmtruncate_list to a
prio_tree meant that on 32-bit machines, truncates at or above 4GB
could truncate lower pages, resulting in BUG_ON()s.

WARNING: The offsets and addresses used within are specifically
calculated to trigger the bug as it existed.  Don't mess with them
unless you *really* know what you're doing.

The kernel bug in question was fixed with commit
856fc2950555.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `856fc2950555 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=856fc2950555>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap20
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap20.c>`__

The test checks that mlocking hugetlb areas works with all combinations
of MAP_PRIVATE and MAP_SHARED with and without MAP_LOCKED specified.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap21
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap21.c>`__

Tests copy-on-write semantics of large pages where a number of threads
map the same file with the MAP_PRIVATE flag. The threads then write
into their copy of the mapping and recheck the contents to ensure they
were not corrupted by the other threads.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 6, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap22
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap22.c>`__

This baseline test validates that a mapping of a certain size can be
created, correctly. Once created, all the pages are filled with a
pattern and rechecked to test for corruption. The mapping is then
released. This process is repeated for a specified number of
iterations.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap23
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap23.c>`__

This test uses mprotect to change protection of hugepage mapping and
perform read/write operation. It checks if the operation results in
expected behaviour as per the protection.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap24
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap24.c>`__

Kernel has bug in mremap for some architecture. mremap() can cause
crashes on architectures with holes in the address space (like ia64)
and on powerpc with it's distict page size slices.

This test perform mremap() with normal and hugepages around powerpc
slice boundary.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap25
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap25.c>`__

The kernel has bug for mremap() on some architecture. mremap() can
cause crashes on architectures with holes in the address space
(like ia64) and on powerpc with it's distinct page size "slices".

This test get the normal mapping address and mremap() hugepage mapping
near to this normal mapping.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap26
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap26.c>`__

Test Description: The kernel has bug for mremap() on some architecture.
mremap() can cause crashes on architectures with holes in the address
space (like ia64) and on powerpc with it's distinct page size "slices".

This test get the huge mapping address and mremap() normal mapping
near to this huge mapping.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 3, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap27
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap27.c>`__

Test to preserve a reserved page against no-reserved mapping. If all
hugepages are reserved, access to no-reserved shared mapping cause a
process die, instead of stealing a hugepage which is reserved for other
process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap28
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap28.c>`__

Test to correct handling for reserve count. If no reserved mapping is
created to reserved file region, it should be considered as reserve
mapping. Otherwise, reserve count will be overflowed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap29
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap29.c>`__

The test do mmap() with shared mapping and write. It matches the data
with private mmap() and then change it with other data. It checks
shared mapping data if data is not contaiminated by private mapping.
Similiarly checks for private data if it is not contaminated by changing
shared mmap data.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap30
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap30.c>`__

readahead() on some kernels can cause the reservation counter to get
corrupted. The problem is that the pages are allocated for the
reservation but not faulted in at the time of allocation. The
counters do not get updated and effectively "leak". This test
identifies whether the kernel is vulnerable to the problem or not.
It's fixed in kernel by commit f2deae9d4e70.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f2deae9d4e70 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f2deae9d4e70>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap31
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap31.c>`__

This test is basic shared mapping test. Two shared mappings are created
with same offset on a file. It checks if writing to one mapping can be
seen to other mapping or not?

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 2, TST_NEEDS
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugemmap32
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap32.c>`__

Before kernel version 5.10-rc7, there was a bug that resulted in a "Bad Page
State" error when freeing gigantic hugepages. This happened because the
struct page entry compound_nr, which overlapped with page->mapping in the
first tail page, was not cleared, causing the error. To ensure that this
issue does not reoccur as struct page keeps changing and some fields are
managed by folio, this test checks that freeing gigantic hugepages does not
produce the above-mentioned error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ba9c1201beaa <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ba9c1201beaa>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `a01f43901cfb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a01f43901cfb>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_B


.. raw:: html

    <hr>

hugemmap34
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugemmap/hugemmap34.c>`__

On PowerPC, the address space is divided into segments.  These segments can
contain either huge pages or normal pages, but not both.  All segments are
initially set up to map normal pages.  When a huge page mapping is created
within a set of empty segments, they are "enabled" for huge pages at that
time.  Once enabled for huge pages, they can not be used again for normal
pages for the remaining lifetime of the process.

If the segment immediately preceeding the segment containing the stack is
converted to huge pages and the stack is made to grow into the this
preceeding segment, some kernels may attempt to map normal pages into the
huge page-only segment -- resulting in bugs.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `0d59a01bc461 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0d59a01bc461>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`supported_archs <tst_test>`
     - | ppc
       | ppc64
   * -  :c:struct:`needs_hugetlbfs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS


.. raw:: html

    <hr>

hugeshmat01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmat/hugeshmat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmat02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmat/hugeshmat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmat03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmat/hugeshmat03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmat04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmat/hugeshmat04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c5c99429fa57 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c5c99429fa57>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`save_restore <tst_test>`
     - PATH_SHMMAX
   * -  :c:struct:`min_mem_avail <tst_test>`
     - 2048


.. raw:: html

    <hr>

hugeshmat05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmat/hugeshmat05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `091d0d55b286 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=091d0d55b286>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `af73e4d9506d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=af73e4d9506d>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `42d7395feb56 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=42d7395feb56>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `40716e29243d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=40716e29243d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4+1, TST_NEEDS


.. raw:: html

    <hr>

hugeshmctl01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmctl/hugeshmctl01.c>`__

Test the IPC_STAT, IPC_SET and IPC_RMID commands used by shmctl().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugeshmctl02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmctl/hugeshmctl02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

hugeshmctl03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmctl/hugeshmctl03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmdt01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmdt/hugeshmdt01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmget01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmget/hugeshmget01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmget02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmget/hugeshmget02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmget03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmget/hugeshmget03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmget05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmget/hugeshmget05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Set the number of the been allocated hugepages


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 128, TST_REQUEST


.. raw:: html

    <hr>

hugeshmget06
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/hugetlb/hugeshmget/hugeshmget06.c>`__

This testcase creates shared memory segments backed by hugepages,
writes specific patterns to each segment, verifies pattern,
and detaches a shared memory segments in a loop.
It ensures that the hugepage backed shared memory functionalities
works correctly by validating the data written to segment.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`hugepages <tst_test>`
     - 4, TST_NEEDS


.. raw:: html

    <hr>

icmp_rate_limit01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/icmp_rate_limit01.c>`__

Test for CVE-2020-25705 fixed in kernel v5.10:
b38e7819cae9 ("icmp: randomize the global rate limiter").

Test of ICMP rate limiting behavior that may be abused for DNS cache
poisoning attack. Send a few batches of 100 packets to a closed UDP port
and count the ICMP errors. If the number of errors is always the same
for each batch (not randomized), the system is vulnerable. Send packets
from multiple IP addresses to bypass per-address ICMP throttling.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b38e7819cae9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b38e7819cae9>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2020-25705 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-25705>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_VETH
       | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

ima_boot_aggregate
------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/integrity/ima/src/ima_boot_aggregate.c>`__


Test timeout defaults is 30 seconds.




.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ima_mmap
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/integrity/ima/src/ima_mmap.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -f
     - File to mmap




.. raw:: html

    <hr>

in6_01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/lib6/in6_01.c>`__

Verify that in6 and sockaddr fields are present.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

in6_02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/lib6/in6_02.c>`__

IPv6 name to index and index to name function tests.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

init_module01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/init_module/init_module01.c>`__

Basic init_module() tests.

**Algorithm**

Inserts a simple module after opening and mmaping the module file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`skip_in_secureboot <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

init_module02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/init_module/init_module02.c>`__

Basic init_module() failure tests.

**Algorithm**

Tests various failure scenarios for init_module().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify01.c>`__

Basic test for inotify events on file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify02.c>`__

Basic test for inotify events on directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify03.c>`__

Check that inotify get IN_UNMOUNT event and don't block the umount command.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify04.c>`__

Test for inotify IN_DELETE_SELF event.

**Algorithm**

This testcase creates a temporary directory, then add watches to a
predefined file and subdirectory, and delete the file and directory
to ensure that the IN_DELETE_SELF event is captured properly.

Because of how the inotify(7) API is designed, we also need to catch
the IN_ATTRIB and IN_IGNORED events.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify05
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify05.c>`__

Check that inotify overflow event is properly generated.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify06
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify06.c>`__

Test for inotify mark destruction race.

Kernels prior to 4.2 have a race when inode is being deleted while
inotify group watching that inode is being torn down. When the race is
hit, the kernel crashes or loops.

The problem has been fixed by commit:
8f2f3eb59dff ("fsnotify: fix oops in fsnotify_clear_marks_by_group_flags()").

Test timeout defaults is 30 seconds.
Maximum runtime is 600 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify07
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify07.c>`__

Check that inotify work for an overlayfs directory after copy up and
drop caches.

An inotify watch pins the directory inode in cache, but not the dentry.
The watch will not report events on the directory if overlayfs does not
obtain the pinned inode to the new allocated dentry after drop caches.

The problem has been fixed by commit:
31747eda41ef ("ovl: hash directory inodes for fsnotify").

**Algorithm**

Add watch on an overlayfs lower directory then chmod directory and drop
dentry and inode caches. Execute operations on directory and child and
expect events to be reported on directory watch.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_overlay <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify08
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify08.c>`__

Check that inotify work for an overlayfs file after copy up and
drop caches.

An inotify watch pins the file inode in cache, but not the dentry.
The watch will not report events on the file if overlayfs does not
obtain the pinned inode to the new allocated dentry after drop caches.

The problem has been fixed by commit:
764baba80168 ("ovl: hash non-dir by lower inode for fsnotify").

**Algorithm**

Add watch on an overlayfs lower file then chmod file and drop dentry
and inode caches. Execute operations on file and expect events to be
reported on file watch.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_overlay <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify09
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify09.c>`__

Test for inotify mark connector destruction race.

Kernels prior to 4.17 have a race when the last fsnotify mark on the inode
is being deleted while another process reports event happening on that
inode. When the race is hit, the kernel crashes or loops.

The problem has been fixed by commit:
d90a10e2444b ("fsnotify: Fix fsnotify_mark_connector race").

Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d90a10e2444b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d90a10e2444b>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify10
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify10.c>`__

Check that event is reported to watching parent and watching child
based on their interest.

Test case #3 is a regression test for commit fecc4559780d that fixes
a bug introduced in kernel v5.9:

fecc4559780d ("fsnotify: fix events reported to watching parent and child").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `fecc4559780d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fecc4559780d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify11
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify11.c>`__

Test opening files after receiving IN_DELETE.

Kernel v5.13 has a regression allowing files to be open after IN_DELETE.

The problem has been fixed by commit:
a37d9a17f099 ("fsnotify: invalidate dcache before IN_DELETE event").

Test timeout is 12 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a37d9a17f099 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a37d9a17f099>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify12
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify/inotify12.c>`__

Test special inotify mask flags.

Regression test for kernel commit:
a32e697cda27 ("inotify: show inotify mask flags in proc fdinfo").

Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a32e697cda27 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a32e697cda27>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

inotify_init1_01
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify_init/inotify_init1_01.c>`__

Verify that inotify_init1() returns a file descriptor and sets
the close-on-exec (FD_CLOEXEC) flag on the new file descriptor
only when called with IN_CLOEXEC.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

inotify_init1_02
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/inotify_init/inotify_init1_02.c>`__

Verify that inotify_init1() returns a file descriptor and sets the
O_NONBLOCK file status flag on the open file description referred
to by the new file descriptor only when called with IN_NONBLOCK.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

input01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input01.c>`__

Verify that /dev/input/eventX receive events sent from a virtual device,
that in our case is a mouse.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

input02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input02.c>`__

Verify that /dev/input/eventX won't receive any event sent from a virtual
device, that in our case is a mouse, when the event device has been grabbed
by an another process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

input03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input03.c>`__

Verify that /dev/input/mice receive events sent from a virtual device,
that in our case is a mouse. The events are a sequence of mouse right click.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

input04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input04.c>`__

Verify that /dev/input/eventX doesn't receive any event sent from a virtual
device, that in our case is a mouse, when relative move is (0, 0)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

input05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input05.c>`__

Verify that /dev/input/eventX doesn't receive any event sent from a virtual
device, that in our case is a mouse, when events not advertised in the input
device bits are filtered.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

input06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/input/input06.c>`__

Verify that auto-repeat is working on a virtual device, that in our case
it's a keyboard.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

io_cancel01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_cancel/io_cancel01.c>`__

Test io_cancel invoked via syscall(2) with one of pointers set to invalid
address and expects it to return EFAULT.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_cancel02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_cancel/io_cancel02.c>`__

Test io_cancel invoked via libaio with one of the data structures points
to invalid data and expects it to return -EFAULT.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_control01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/io/io_control01.c>`__


Perform some I/O on a file and check if at least some of it is
recorded by the I/O controller.

The exact amount of I/O performed is dependent on the file system,
page cache, scheduler and block driver. We call sync and drop the
file's page cache to force reading and writing. We also write
random data to try to prevent compression.

The pagecache is a particular issue for reading. If the call to
fadvise is ignored then the data may only be read from the
cache. So that no I/O requests are made.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - io
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | ntfs
       | tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

io_destroy01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_destroy/io_destroy01.c>`__

Test io_destroy invoked via libaio with invalid ctx and expects it to
return -EINVAL.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

io_destroy02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_destroy/io_destroy02.c>`__

Test io_destroy invoked via syscall(2) with an invalid ctx and expects
it to return EINVAL.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_getevents01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_getevents/io_getevents01.c>`__

Test io_getevents invoked via syscall(2) with invalid ctx and expects it to
return EINVAL.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_getevents02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_getevents/io_getevents02.c>`__

Test io_getevents invoked via libaio with invalid ctx and expects it to
return -EINVAL.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_pgetevents01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_pgetevents/io_pgetevents01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.18
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

io_pgetevents02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_pgetevents/io_pgetevents02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.18
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

io_setup01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_setup/io_setup01.c>`__

Test io_setup invoked via libaio:

- io_setup succeeds if both nr_events and ctxp are valid.
- io_setup fails and returns -EINVAL if ctxp is not initialized to 0.
- io_setup fails and returns -EINVAL if nr_events is invalid.
- io_setup fails and returns -EFAULT if ctxp is NULL.
- io_setup fails and returns -EAGAIN if nr_events exceeds the limit
  1of available events.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

io_setup02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_setup/io_setup02.c>`__

Test io_setup invoked via syscall(2):

- io_setup fails and returns EFAULT if ctxp is NULL.
- io_setup fails and returns EINVAL if ctxp is not initialized to 0.
- io_setup fails and returns EINVAL if nr_events is -1.
- io_setup fails and returns EAGAIN if nr_events exceeds the limit
  of available events.
- io_setup succeeds if both nr_events and ctxp are valid.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_submit01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_submit/io_submit01.c>`__

Test io_submit() invoked via libaio:

- io_submit fails and returns -EINVAL if ctx is invalid.
- io_submit fails and returns -EINVAL if nr is invalid.
- io_submit fails and returns -EFAULT if iocbpp pointer is invalid.
- io_submit fails and returns -EBADF if fd is invalid.
- io_submit succeeds and returns the number of iocbs submitted.
- io_submit succeeds and returns 0 if nr is zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

io_submit02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_submit/io_submit02.c>`__

Test io_submit invoked via syscall(2):

1. io_submit() returns the number of iocbs submitted.
2. io_submit() returns 0 if nr is zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_submit03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_submit/io_submit03.c>`__

Test io_submit invoked via syscall(2):

1. io_submit fails and returns EINVAL if ctx is invalid.
2. io_submit fails and returns EINVAL if nr is invalid.
3. io_submit fails and returns EFAULT if iocbpp pointer is invalid.
4. io_submit fails and returns EBADF if fd is invalid.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_AIO=y


.. raw:: html

    <hr>

io_uring01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_uring/io_uring01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/io_uring_disabled
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

io_uring02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/io_uring/io_uring02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `9392a27d88b9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=9392a27d88b9>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `ff002b30181d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ff002b30181d>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `d87683620489 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d87683620489>`_
   * - :c:struct:`linux-stable-git <tst_tag>`
     - `c4a23c852e80 <https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/commit/?id=c4a23c852e80>`_
   * - :c:struct:`linux-stable-git <tst_tag>`
     - `cac68d12c531 <https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/commit/?id=cac68d12c531>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2020-29373 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-29373>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_CHROOT)
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/io_uring_disabled
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl01.c>`__

Testcase to check the errnos set by the ioctl(2) system call.

- EBADF: Pass an invalid fd to ioctl(fd, ...) and expect EBADF
- EFAULT: Pass an invalid address of arg in ioctl(fd, ..., arg)
- EINVAL: Pass invalid cmd in ioctl(fd, cmd, arg)
- ENOTTY: Pass an non-streams fd in ioctl(fd, cmd, arg)
- EFAULT: Pass a NULL address for termio

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl02.c>`__

Test TCGETA/TCGETS and TCSETA/TCSETS ioctl implementations for tty driver.

In this test, the parent and child open the parentty and the childtty
respectively.  After opening the childtty the child flushes the stream
and wakes the parent (thereby asking it to continue its testing). The
parent, then starts the testing. It issues a TCGETA/TCGETS ioctl to
get all the tty parameters. It then changes them to known values by
issuing a TCSETA/TCSETS ioctl. Then the parent issues a TCSETA/TCGETS
ioctl again and compares the received values with what it had set
earlier. The test fails if TCGETA/TCGETS or TCSETA/TCSETS fails, or if
the received values don't match those that were set. The parent does
all the testing, the requirement of the child process is to moniter
the testing done by the parent, and hence the child just waits for the
parent.

Test timeout is 9 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -d
     - Tty device. For example, /dev/tty[0-9]


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl03.c>`__

Test whether all the valid IFF flags are returned properly by implementation
of TUNGETFEATURES ioctl.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl04.c>`__

Basic test for the BLKROSET and BLKROGET ioctls.

- Set the device read only, read the value back.
- Try to mount the device read write, expect failure.
- Try to mount the device read only, expect success.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl05.c>`__

Basic test for the BLKGETSIZE and BLKGETSIZE64 ioctls.

- BLKGETSIZE returns size in 512 byte blocks BLKGETSIZE64 in bytes
  compare that they return the same value.
- lseek to the end of the device, this should work
- try to read from the device, read should return 0

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl06.c>`__

Basic test for the BLKRASET and BLKRAGET ioctls.

Sets device read-ahead, reads it back and compares the values.

The read-ahead value was choosen to be multiple of 512, since it's rounded
based on page size on BLKRASET and 512 should be safe enough for everyone.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl07.c>`__

Very basic test for the RND* ioctls.

Reads the entropy available from both /proc and the ioctl and compares
they are similar enough (within a configured fuzz factor).


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -f
     - Fuzz factor for valid match (default 2)




.. raw:: html

    <hr>

ioctl08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl08.c>`__

Tests the ioctl functionality to deduplicate fileranges using
btrfs filesystem.

1. Sets the same contents for two files and deduplicates it.
   Deduplicates 3 bytes and set the status to
   FILE_DEDUPE_RANGE_SAME.
2. Sets different content for two files and tries to
   deduplicate it. 0 bytes get deduplicated and status is
   set to FILE_DEDUPE_RANGE_DIFFERS.
3. Sets same content for two files but sets the length to
   deduplicate to -1. ioctl(FIDEDUPERANGE) fails with EINVAL.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - btrfs
   * -  :c:struct:`filesystems <tst_test>`
     - btrfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl09.c>`__

Basic test for the BLKRRPART ioctl, it is the same as blockdev
--rereadpt command.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - parted
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop


.. raw:: html

    <hr>

ioctl_ficlone01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlone01.c>`__

This test verifies that ioctl() FICLONE feature clones file content from
one file to an another.

**Algorithm**

- populate source file
- clone source content inside destination file
- verify that source content has been cloned inside destination file
- write a single byte inside destination file
- verify that source content didn't change while destination did

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`filesystems <tst_test>`
     - | btrfs
       | bcachefs
       | xfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ficlone02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlone02.c>`__

This test verifies that ioctl() FICLONE/FICLONERANGE feature correctly raises
EOPNOTSUPP when an unsupported filesystem is used. In particular, filesystems
which don't support copy-on-write.

Test timeout is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | bcachefs
       | btrfs
       | overlayfs
       | nfs
       | xfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ficlone03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlone03.c>`__

This test verifies that ioctl() FICLONE/FICLONERANGE feature correctly raises
exceptions when it's supposed to.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - | btrfs
       | bcachefs
       | xfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ficlone04
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlone04.c>`__

This test verifies that ioctl() FICLONE/FICLONERANGE feature raises the right
error according with bad file descriptors.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ficlonerange01
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlonerange01.c>`__

This test verifies that ioctl() FICLONERANGE feature clones file content from
one file to an another.

**Algorithm**

- populate source file
- clone a portion of source content inside destination file
- verify that source content portion has been cloned inside destination file
- write a single byte inside destination file
- verify that source content didn't change while destination did

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - | btrfs
       | bcachefs
       | xfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ficlonerange02
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ficlonerange02.c>`__

This test verifies that ioctl() FICLONERANGE feature correctly raises
EINVAL when:
- filesystem does not support overlapping reflink ranges in the same file
- filesystem does not support reflinking on bad blocks alignment

Test timeout is 4 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - | btrfs
       | bcachefs
       | xfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop01.c>`__

Tests ioctl() on loopdevice with LO_FLAGS_AUTOCLEAR and LO_FLAGS_PARTSCAN flags.

For LO_FLAGS_AUTOCLEAR flag, only checks autoclear field value in sysfs
and also gets lo_flags by using LOOP_GET_STATUS.

For LO_FLAGS_PARTSCAN flag, it is the same as LO_FLAGS_AUTOCLEAR flag.
But also checks whether it can scan partition table correctly i.e. checks
whether /dev/loopnp1 and /sys/bloclk/loop0/loop0p1 existed.

For LO_FLAGS_AUTOCLEAR flag, it can be clear. For LO_FLAGS_PARTSCAN flag,
it cannot be clear. Test checks this.

Test timeout is 1 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `10c70d95c0f2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=10c70d95c0f2>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `6ac92fb5cdff <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6ac92fb5cdff>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop


.. raw:: html

    <hr>

ioctl_loop02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop02.c>`__

Tests ioctl() on loopdevice with LO_FLAGS_READ_ONLY (similar as losetup -r) and
LOOP_CHANGE_FD flags.

For LOOP_CHANGE_FD, this operation is possible only if the loop device
is read-only and the new backing store is the same size and type as the
old backing store.

When using LOOP_CONFIGURE ioctl(), it can set LO_FLAGS_READ_ONLY
flag even though backing file with write mode.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop03.c>`__

Tests ioctl() on loopdevice with LOOP_CHANGE_FD flag.

Tests whether LOOP_CHANGE_FD can not succeed (get EINVAL error)
when loop_dev is not read only.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop04.c>`__

Tests ioctl() on loopdevice with LOOP_SET_CAPACITY flag.

Tests whether LOOP_SET_CAPACITY can update a live
loop device size after change the size of the underlying
backing file. Also checks sysfs value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop05.c>`__

Tests ioctl() on loopdevice with LOOP_SET_DIRECT_IO flag.

Tests whether LOOP_SET_DIRECT_IO can update a live loop device dio mode.
It requires the backing file also supports dio mode and the lo_offset is
aligned with the logical block size.

The direct I/O error handling is a bit messy on Linux, some filesystems
return error when it coudln't be enabled, some silently fall back to regular
buffered I/O.

The LOOP_SET_DIRECT_IO ioctl() may ignore all checks if it cannot get the
logical block size which is the case if the block device pointer in the
backing file inode is not set. In this case the direct I/O appears to be
enabled but falls back to buffered I/O later on. This is the case at least
for Btrfs. Because of that the test passes both with failure as well as
success with non-zero offset.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | tmpfs
       | overlayfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop06
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop06.c>`__

Tests invalid block size of loopdevice by using ioctl() with
LOOP_SET_BLOCK_SIZE and LOOP_CONFIGURE flags.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_loop07
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_loop07.c>`__

Tests ioctl() on loopdevice with LOOP_SET_STATUS64 and LOOP_GET_STATUS64 flags.

Tests lo_sizelimit field. If lo_sizelimit is 0, it means max
available. If sizelimit is less than loop_size, loopsize will
be truncated.

Also uses LOOP_CONFIGURE ioctl to test lo_sizelimit field.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `79e5dc59e297 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=79e5dc59e297>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ns01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns01.c>`__

Test ioctl_ns with NS_GET_PARENT request.

Parent process tries to get parent of initial namespace, which should
fail with EPERM because it has no parent.

Child process has a new pid namespace, which should make the call fail
with EPERM error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.9


.. raw:: html

    <hr>

ioctl_ns02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns02.c>`__

Test ioctl_ns with NS_GET_PARENT request.

Test tries to get namespace parent for UTS namespace, which
should make the call fail with EINVAL, being a nonhierarchical
namespace.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.9


.. raw:: html

    <hr>

ioctl_ns03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns03.c>`__

Test ioctl_ns with NS_GET_OWNER_UID request.

Calls ioctl for a UTS namespace, which isn't a user namespace.
This should make the call fail with EINVAL.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11


.. raw:: html

    <hr>

ioctl_ns04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns04.c>`__

Test ioctl_ns with NS_GET_USERNS request.

Owning user namespace of process calling ioctl is out of scope,
which should make the call fail with EPERM.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.9


.. raw:: html

    <hr>

ioctl_ns05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns05.c>`__

Test ioctl_ns with NS_GET_PARENT request.

Child cloned with the CLONE_NEWPID flag is created in a new pid namespace.
That's checked by comparing its /proc/self/ns/pid symlink and the parent's
one. Also child thinks its pid is 1.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.9
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ns06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns06.c>`__

Test ioctl_ns with NS_GET_USERNS request.

After the call to clone with the CLONE_NEWUSER flag,
child is created in a new user namespace. That's checked by
comparing its /proc/self/ns/user symlink and the parent's one,
which should be different.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.9
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_ns07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_ns07.c>`__

Test ioctl_ns with NS_GET_* request for file descriptors
that aren't namespaces.

Calling ioctl with test directory's file descriptor
should make the call fail with ENOTTY.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ioctl_sg01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioctl/ioctl_sg01.c>`__

CVE-2018-1000204

Test ioctl(SG_IO) and check that kernel doesn't leak data. Requires
a read-accessible generic SCSI device (e.g. a DVD drive).

Leak fixed in:

 commit a45b599ad808c3c982fdcdc12b0b8611c2f92824
 Author: Alexander Potapenko <glider@google.com>
 Date:   Fri May 18 16:23:18 2018 +0200

 scsi: sg: allocate with __GFP_ZERO in sg_build_indirect()

Test timeout is 3600 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a45b599ad808 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a45b599ad808>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-1000204 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000204>`_




.. raw:: html

    <hr>

ioperm01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioperm/ioperm01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioperm02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioperm/ioperm02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

iopl01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/iopl/iopl01.c>`__

This is a basic test for iopl(2) system call.

Test the system call for possible privilege levels.
As the privilege level for a normal process is 0, start by
setting/changing the level to 0.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1


.. raw:: html

    <hr>

iopl02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/iopl/iopl02.c>`__

Test for iopl(2) system call error.

- iopl(2) fail with EINVAL when privilege level greater than 3.
- iopl(2) fail with EPERM when the current user is not the super-user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_in_lockdown <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ioprio_get01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioprio/ioprio_get01.c>`__

Basic ioprio_get() test. Gets the current process I/O priority and
checks that the values are sane.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ioprio_set01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioprio/ioprio_set01.c>`__

Basic ioprio_set() test. Gets the current process I/O priority and
bumps it up one notch, then down two notches and checks that the
new priority is reported back correctly.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ioprio_set02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioprio/ioprio_set02.c>`__

Extended ioprio_set() test.
Tests to set all 8 priority levels for best effort priority, then
switches to test all 8 priority levels for idle priority.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ioprio_set03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ioprio/ioprio_set03.c>`__

Negative ioprio_set() test. Test some non-working priorities to make
sure they don't work.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

irqbalance01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/irq/irqbalance01.c>`__

Check that something (e.g. irqbalance daemon) is performing IRQ
load balancing.

On many systems userland needs to set /proc/irq/$IRQ/smp_affinity
to prevent many IRQs being delivered to the same CPU.

Note some drivers and IRQ controllers will distribute IRQs
evenly. Some systems will have housekeeping CPUs configured. Some
IRQs can not be masked etc. So this test is not appropriate for all
scenarios.

Furthermore, exactly how IRQs should be distributed is a
performance and/or security issue. This is only a generic smoke
test. It will hopefully detect misconfigured systems and total
balancing failures which are often silent errors.

Heuristic: Evidence of Change

1. Find IRQs with a non-zero count
2. Check if they are now disallowed

There are two sources of information we need to parse:

1. /proc/interrupts
2. /proc/irq/$IRQ/smp_affinity

We get the active IRQs and CPUs from /proc/interrupts. It also
contains the per-CPU IRQ counts and info we do not care about.

We get the IRQ masks from each active IRQ's smp_affinity file. This
is a bitmask written out in hexadecimal format. It shows which CPUs
an IRQ may be received by.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_cpus <tst_test>`
     - 2


.. raw:: html

    <hr>

kallsyms
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/kallsyms/kallsyms.c>`__

Utilize kernel's symbol table for unauthorized address access.

Access the system symbols with root permission to test whether it's
possible to read and write the memory addresses of kernel-space
from user-space. This helps in identifying potential vulnerabilities
where user-space processes can inappropriately access kernel memory.

Steps:

 1. Start a process that reads all symbols and their addresses from
    /proc/kallsyms and stores them in a linked list.

 2. Attempt to write to each kernel address found in the linked list.
    The expectation is that each attempt will fail with a SIGSEGV
    (segmentation fault), indicating that the user-space process
    cannot write to kernel memory.

 3. Handle each SIGSEGV using a signal handler that sets a flag and
    long jumps out of the faulting context.

 4. If any write operation does not result in a SIGSEGV, log this as
    a potential security vulnerability.

 5. Observe and log the behavior and any system responses to these
    unauthorized access attempts.

Test timeout is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KALLSYMS=y


.. raw:: html

    <hr>

kcmp01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kcmp/kcmp01.c>`__

Verify that

1. kcmp() returns 0 with two process and two file descriptors refering to the
same open file
2. kcmp() doesn't return 0 with two process and two file descriptors not
refering to the same open file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

kcmp02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kcmp/kcmp02.c>`__

Verify that, kcmp() returns -1 and sets errno to

1. ESRCH if pid does not exist
2. EINVAL if type is invalid (KCMP_TYPES + 1)
3. EINVAL if type is invalid (-1)
4. EINVAL if type is invalid (INT_MIN)
5. EINVAL if type is invalid (INT_MAX)
6. EBADF if file descriptor is invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

kcmp03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kcmp/kcmp03.c>`__

Verify that, kcmp() returns 0 if the processes

1. share the same file system information
2. share I/O context
3. share the same list of System V semaphore undo operations
4. share the same address space

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

keyctl01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl01.c>`__

Tests the keyctl(2) syscall.

Manipulate the kernel's key management facility.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

keyctl02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl02.c>`__

Regression test for the race between keyctl_read() and
keyctl_revoke(), if the revoke happens between keyctl_read()
checking the validity of a key and the key's semaphore being taken,
then the key type read method will see a revoked key.

This causes a problem for the user-defined key type because it
assumes in its read method that there will always be a payload
in a non-revoked key and doesn't check for a NULL pointer.

Bug was fixed in commit
b4a1b4f5047e ("KEYS: Fix race between read and revoke")

Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b4a1b4f5047e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b4a1b4f5047e>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2015-7550 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-7550>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

keyctl03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl03.c>`__

Regression test for commit
f05819df10d7 ("KEYS: Fix crash when attempt to garbage collect an uninstantiated keyring")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f05819df10d7 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f05819df10d7>`_




.. raw:: html

    <hr>

keyctl04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl04.c>`__

Regression test for commit c9f838d104fe ("KEYS: fix
keyctl_set_reqkey_keyring() to not leak thread keyrings"), a.k.a.
CVE-2017-7472.  This bug could be used to exhaust kernel memory, though it
would take a while to do that and it would grind the test suite to a halt.
Instead we do a quick check for whether the existing thread keyring is
replaced when the default request-key destination is set to the thread
keyring.  It shouldn't be, but before the fix it was (and the old thread
keyring was leaked).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-7472 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7472>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `c9f838d104fe <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c9f838d104fe>`_




.. raw:: html

    <hr>

keyctl05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl05.c>`__

Regression test for commit 63a0b0509e70 ("KEYS: fix freeing uninitialized
memory in key_update()").  Try to reproduce the crash in two different ways:

1. Try to update a key of a type that has a ->preparse() method but not an
   ->update() method.  Examples are the "asymmetric" and "dns_resolver" key
   types.  It crashes reliably for the "asymmetric" key type, since the
   "asymmetric" key type's ->free_preparse() method will dereference a
   pointer in the uninitialized memory, whereas other key types often just
   free a pointer which tends be NULL in practice, depending on how the stack
   is laid out.  However, to actually be able to add an "asymmetric" key, we
   need a specially-formatted payload and several kernel config options.  We
   do try it, but for completeness we also try the "dns_resolver" key type
   (though that's not guaranteed to be available either).

2. Race keyctl_update() with another task removing write permission from the
   key using keyctl_setperm().  This can cause a crash with almost any key
   type.  "user" is a good one to try, since it's always available if
   keyrings are supported at all.  However, depending on how the stack is
   laid out the crash may not actually occur.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `63a0b0509e70 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=63a0b0509e70>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `acc657692aed <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=acc657692aed>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

keyctl06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl06.c>`__

Regression test for commit:

e645016abc80 ("KEYS: fix writing past end of user-supplied buffer in keyring_read()")

as well as its follow-on fix:

commit 3239b6f29bdf ("KEYS: return full count in keyring_read() if buffer is too small")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e645016abc80 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e645016abc80>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `3239b6f29bdf <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3239b6f29bdf>`_




.. raw:: html

    <hr>

keyctl07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl07.c>`__

Regression test for commit 37863c43b2c6 ("KEYS: prevent KEYCTL_READ on
negative key").  This is CVE-2017-12192.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-12192 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-12192>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `37863c43b2c6 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=37863c43b2c6>`_




.. raw:: html

    <hr>

keyctl08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl08.c>`__

Test for CVE-2016-9604, checks that keys beginning with "." are disallowed.

See commit
ee8f844e3c5a ("KEYS: Disallow keyrings beginning with '.' to be joined as session keyrings")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2016-9604 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9604>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `ee8f844e3c5a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ee8f844e3c5a>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

keyctl09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/keyctl/keyctl09.c>`__

Test that encrypted keys can be instantiated using user-provided decrypted
data that is hex-ascii encoded.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5adedd42245af <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5adedd42245af>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_DECRYPTED_DATA=y


.. raw:: html

    <hr>

kill03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kill/kill03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

kill05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kill/kill05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

kill06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kill/kill06.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

kill11
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kill/kill11.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

kill13
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/kill/kill13.c>`__

Reproducer of CVE-2018-10124; INT_MIN negation.

On most two's complement CPUs negation of INT_MIN will result in
INT_MIN because ~((unsigned)INT_MIN) + 1 overflows to INT_MIN
(unless trapped). On one's complement ~((unsigned)INT_MIN) = INT_MAX.

Without UBSAN kill will always return ESRCH. Regardless of if the
bug is present as INT_MIN/INT_MAX are invalid PIDs. It checks the
PID before the signal number so we can not cause EINVAL. A trivial
test of kill is performed elsewhere. So we don't run the test
without UBSAN to avoid giving the impression we have actually
tested for the bug.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `4ea77014af0d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4ea77014af0d>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2018-10124 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2018-10124>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_UBSAN_SIGNED_OVERFLOW


.. raw:: html

    <hr>

kmsg01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/logging/kmsg/kmsg01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ksm01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes
   * - -s
     - Memory allocation size in MB
   * - -u
     - Memory allocation unit in MB


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/max_page_sharing
       | /sys/kernel/mm/ksm/merge_across_nodes
       | /sys/kernel/mm/ksm/smart_scan


.. raw:: html

    <hr>

ksm02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm02.c>`__


Test timeout is 32 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes
   * - -s
     - Memory allocation size in MB
   * - -u
     - Memory allocation unit in MB


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - cpuset
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/max_page_sharing
       | /sys/kernel/mm/ksm/merge_across_nodes
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y


.. raw:: html

    <hr>

ksm03
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes
   * - -s
     - Memory allocation size in MB
   * - -u
     - Memory allocation unit in MB


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/max_page_sharing
       | /sys/kernel/mm/ksm/merge_across_nodes
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y


.. raw:: html

    <hr>

ksm04
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm04.c>`__

Prerequisites:

ksm and ksmtuned daemons need to be disabled. Otherwise, it could
distrub the testing as they also change some ksm tunables depends
on current workloads.

**Algorithm**

- Check ksm feature and backup current run setting.
- Change run setting to 1 - merging.
- 3 memory allocation programs have the memory contents that 2 of
  them are all 'a' and one is all 'b'.
- Check ksm statistics and verify the content.
- 1 program changes the memory content from all 'a' to all 'b'.
- Check ksm statistics and verify the content.
- All programs change the memory content to all 'd'.
- Check ksm statistics and verify the content.
- Change one page of a process.
- Check ksm statistics and verify the content.
- Change run setting to 2 - unmerging.
- Check ksm statistics and verify the content.
- Change run setting to 0 - stop.

Test timeout is 32 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of processes
   * - -s
     - Memory allocation size in MB
   * - -u
     - Memory allocation unit in MB


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/max_page_sharing
       | /sys/kernel/mm/ksm/merge_across_nodes
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - | memory
       | cpuset


.. raw:: html

    <hr>

ksm05
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2011-2183 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-2183>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y


.. raw:: html

    <hr>

ksm06
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm06.c>`__

The case is designed to test sysfs boolean knob
/sys/kernel/mm/ksm/merge_across_nodes.

When merge_across_nodes is set to zero only pages from the same
node are merged, otherwise pages from all nodes can be merged
together.

Introduced in commit:

 commit 90bd6fd31c8097ee4ddcb74b7e08363134863de5
  Author: Petr Holasek <pholasek@redhat.com>
  Date:   Fri Feb 22 16:35:00 2013 -0800

  ksm: allow trees per NUMA node

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Allocate x pages memory per node


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/max_page_sharing
       | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/merge_across_nodes
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_KSM=y
       | CONFIG_NUMA=y


.. raw:: html

    <hr>

ksm07
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/ksm/ksm07.c>`__

Kernel Samepage Merging (KSM) for smart scan feature

Test allocates a page and fills it with 'a' characters. It captures the
pages_skipped counter, waits for a few  iterations and captures the
pages_skipped counter again. The expectation  is that over 50% of the page
scans are skipped. (There is only one page that has KSM enabled and it gets
scanned during each iteration and it cannot be de-duplicated.)

Smart scan feature was added in kernel v6.7.

**Prerequisites**

ksm and ksmtuned daemons need to be disabled. Otherwise, it could
distrub the testing as they also change some ksm tunables depends
on current workloads.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /sys/kernel/mm/ksm/pages_skipped
       | /sys/kernel/mm/ksm/run
       | /sys/kernel/mm/ksm/sleep_millisecs
       | /sys/kernel/mm/ksm/smart_scan
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_KSM=y


.. raw:: html

    <hr>

kvm_pagefault01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_pagefault01.c>`__

CVE 2021-38198

Check that x86_64 KVM correctly enforces (lack of) write permissions
in 4-level and 5-level memory page table mode. Missing page faults fixed in:

 commit b1bd5cba3306691c771d558e94baa73e8b0b96b7
 Author: Lai Jiangshan <laijs@linux.alibaba.com>
 Date:   Thu Jun 3 13:24:55 2021 +0800

 KVM: X86: MMU: Use the correct inherited permissions to get shadow page

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b1bd5cba3306 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b1bd5cba3306>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-38198 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-38198>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - x86_64
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

kvm_svm01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_svm01.c>`__

CVE 2021-3653

Check that KVM either blocks enabling virtual interrupt controller (AVIC)
in nested VMs or correctly sets up the required memory address translation.
If AVIC is enabled without address translation in the host kernel,
the nested VM will be able to read and write an arbitraty physical memory
page specified by the parent VM. Unauthorized memory access fixed in:

 commit 0f923e07124df069ba68d8bb12324398f4b6b709
 Author: Maxim Levitsky <mlevitsk@redhat.com>
 Date:   Thu Jul 15 01:56:24 2021 +0300

 KVM: nSVM: avoid picking up unsupported bits from L2 in int_ctl (CVE-2021-3653)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `0f923e07124d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0f923e07124d>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-3653 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3653>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86


.. raw:: html

    <hr>

kvm_svm02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_svm02.c>`__

CVE 2021-3656

Check that KVM correctly intercepts VMSAVE and VMLOAD instructions
in a nested virtual machine even when the parent guest disables
intercepting either instruction. If KVM does not override the disabled
intercepts, it'll give the nested VM read/write access to a few bytes
of an arbitrary physical memory page. Unauthorized memory access fixed in:

 commit c7dfa4009965a9b2d7b329ee970eb8da0d32f0bc
 Author: Maxim Levitsky <mlevitsk@redhat.com>
 Date:   Mon Jul 19 16:05:00 2021 +0300

 KVM: nSVM: always intercept VMLOAD/VMSAVE when nested (CVE-2021-3656)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c7dfa4009965 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c7dfa4009965>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-3656 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3656>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86


.. raw:: html

    <hr>

kvm_svm03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_svm03.c>`__

Check that KVM correctly intercepts the CLGI instruction in a nested
virtual machine even when the parent guest disables intercept.
If KVM does not override the disabled intercept, it'll allow the nested VM
to hold the physical CPU indefinitely and potentially perform a denial
of service attack against the host kernel. CPU lockup fixed in:

 commit 91b7130cb6606d8c6b3b77e54426b3f3a83f48b1
 Author: Paolo Bonzini <pbonzini@redhat.com>
 Date:   Fri May 22 12:28:52 2020 -0400

 KVM: SVM: preserve VGIF across VMCB switch

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `91b7130cb660 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=91b7130cb660>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86
   * -  :c:struct:`min_cpus <tst_test>`
     - 2


.. raw:: html

    <hr>

kvm_svm04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_svm04.c>`__

Functional test for VMSAVE/VMLOAD instructions in KVM environment. Verify
that both instructions save/load the CPU state according to CPU
documentation.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86


.. raw:: html

    <hr>

kvm_vmx01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/kvm/kvm_vmx01.c>`__

Basic functional test for VMREAD/VMWRITE instructions in KVM environment.
Verify that VMWRITE instruction changes the contents of current VMCS and
the values written into shadow VMCS can be read in both parent and nested
VM.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86_64
       | x86


.. raw:: html

    <hr>

landlock01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock01.c>`__

This test verifies that landlock_create_ruleset syscall fails with the right
error codes:

- EINVAL Unknown flags, or unknown access, or too small size
- E2BIG size is too big
- EFAULT attr was not a valid address
- ENOMSG Empty accesses (i.e., attr->handled_access_fs is 0)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

landlock02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock02.c>`__

This test verifies that landlock_add_rule syscall fails with the right
error codes:

- EINVAL flags is not 0, or the rule accesses are inconsistent
- ENOMSG Empty accesses (i.e., rule_attr->allowed_access is 0)
- EBADF ruleset_fd  is  not  a  file  descriptor  for  the  current  thread,
  or a member of rule_attr is not a file descriptor as expected
- EBADFD ruleset_fd is not a ruleset file descriptor, or a member of
  rule_attr is not the expected file descriptor type
- EFAULT rule_attr was not a valid address

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

landlock03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock03.c>`__

This test verifies that landlock_restrict_self syscall fails with the right
error codes:

- EINVAL flags is not 0
- EBADF ruleset_fd is not a file descriptor for the current thread
- EBADFD ruleset_fd is not a ruleset file descriptor
- EPERM ruleset doesn't have CAP_SYS_ADMIN in its namespace
- E2BIG The maximum number of stacked rulesets is reached for the current
  thread

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

landlock04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock04.c>`__

This test verifies that all landlock filesystem rules are working properly.
The way we do it is to verify that all disabled syscalls are not working but
the one we enabled via specifc landlock rules.

Test timeout is 360 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 13
   * -  :c:struct:`resource_files <tst_test>`
     - landlock_exec
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_REQ,CAP_MKNOD)
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

landlock05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock05.c>`__

This test verifies LANDLOCK_ACCESS_FS_REFER access in the
landlock sandbox.

**Algorithm**

- apply LANDLOCK_ACCESS_FS_REFER in the folder1
- apply LANDLOCK_ACCESS_FS_REFER in the folder2
- create folder3
- verify that file can be moved from folder1 to folder2
- verify that file can't be moved from folder1 to folder3

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

landlock06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock06.c>`__

This test verifies LANDLOCK_ACCESS_FS_IOCTL_DEV access in the
landlock sandbox by creating a pipe and testing that ioctl() can be executed
on it. The test is also verifying that some of the I/O operations can be
always executed no matter the sandbox rules.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - vfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

landlock07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `39705a6c29f8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=39705a6c29f8>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2024-42318 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-42318>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)


.. raw:: html

    <hr>

landlock08
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/landlock/landlock08.c>`__

Verify the landlock support for bind()/connect() syscalls in IPV4 and IPV6
protocols. In particular, check that bind() is assigning the address only on
the TCP port enforced by LANDLOCK_ACCESS_NET_BIND_TCP and check that
connect() is connecting only to a specific TCP port enforced by
LANDLOCK_ACCESS_NET_CONNECT_TCP.

**Algorithm**

Repeat the following procedure for IPV4 and IPV6:

- create a socket on PORT1, bind() it and check if it passes
- enforce the current sandbox with LANDLOCK_ACCESS_NET_BIND_TCP on PORT1
- create a socket on PORT1, bind() it and check if it passes
- create a socket on PORT2, bind() it and check if it fails

- create a server listening on PORT1
- create a socket on PORT1, connect() to it and check if it passes
- enforce the current sandbox with LANDLOCK_ACCESS_NET_CONNECT_TCP on PORT1
- create a socket on PORT1, connect() to it and check if it passes
- create a socket on PORT2, connect() to it and check if it fails

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_REQ,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_REQ,CAP_NET_BIND_SERVICE)
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_INET=y
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

leapsec01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/clock_gettime/leapsec01.c>`__


Test timeout is 40 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

lftest
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/lftest/lftest.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - COUNT Number of megabytes to write (default 100)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lgetxattr01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lgetxattr/lgetxattr01.c>`__

Check the basic functionality of the lgetxattr(2).

In the case of a symbolic link, lgetxattr(2) only gets the value of the
extended attribute related to the link itself by name.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

lgetxattr02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lgetxattr/lgetxattr02.c>`__

Verify that, lgetxattr(2) returns -1 and sets errno to

1. ENODATA if the named attribute does not exist.
2. ERANGE if the size of the value buffer is too small to hold the result.
3. EFAULT when reading from an invalid address.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

link02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/link/link02.c>`__

Tests that link(2) succeeds.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

link04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/link/link04.c>`__

Negative test cases for link(2).

This test program should contain test cases where link will fail regardless
of who executed it (i.e. joe-user or root)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

link05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/link/link05.c>`__

Tests that link(2) succeeds with creating 1000 links.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

link08
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/link/link08.c>`__

Verify that:

- link() fails with EPERM if the old path is a directory.
- link() fails with EXDEV if the old path and the new path
  are not on the same mounted file system(Linux permits
  a file system to be mounted at multiple points, but link()
  does not work across different mount points, even if the same
  file system is mounted on both).
- link() fails with EROFS if the file is on a read-only file system.
- link() fails with ELOOP if too many symbolic links were encountered
  in resolving path.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

listmount01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listmount/listmount01.c>`__

This test verifies that listmount() is properly recognizing a mounted
root directory using LSMT_ROOT flag.

**Algorithm**

- move into a new unshared namespace
- mount() a root inside temporary folder and get its mount ID
- get list of mounted IDs using listmount(LSMT_ROOT, ..)
- verify that the root mount ID is the only mount ID present inside the list

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

listmount02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listmount/listmount02.c>`__

This test verifies that listmount() is properly reading groups of mount IDs,
checking that both oneshoot and iterator API for listmount() return the same
array.

**Algorithm**

- move into a new unshared namespace
- mount() our new root inside temporary folder
- generate a full mounts tree inside root folder, doubling the number of
  mounted filesystems each bind mount
- read the full list of mounted IDs using listmount(LSMT_ROOT, ..)
- read the list of mounted IDs using groups of fixed size
- compare the first mount list with the second mount list

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

listmount03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listmount/listmount03.c>`__

Verify that listmount() raises EPERM when mount point is not accessible.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

listmount04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listmount/listmount04.c>`__

Verify that listmount() raises the correct errors according with
invalid data:

- EFAULT: req or mnt_id are unaccessible memories
- EINVAL: invalid flags or mnt_id request
- ENOENT: non-existent mount point

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8


.. raw:: html

    <hr>

listxattr01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listxattr/listxattr01.c>`__

Test for listxattr(2) system call.

listxattr(2) retrieves the list of extended attribute names
associated with the file itself in the filesystem.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

listxattr02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listxattr/listxattr02.c>`__

Test for listxattr error.

- ERANGE - the size of the list buffer is too small to hold the result.
- ENOENT - path is an empty string.
- EFAULT - attempted to read from a invalid address.
- ENAMETOOLONG - path is longer than allowed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

listxattr03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/listxattr/listxattr03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

llistxattr01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llistxattr/llistxattr01.c>`__

Basic test for llistxattr(2), retrieves the list of extended attribute names
associated with the link itself in the filesystem.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

llistxattr02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llistxattr/llistxattr02.c>`__

Verify llistxattr(2) returns -1 and set proper errno:

- ERANGE if the size of the list buffer is too small to hold the result
- ENOENT if path is an empty string
- EFAULT when attempted to read from a invalid address
- ENAMETOOLONG if path is longer than allowed

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

llistxattr03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llistxattr/llistxattr03.c>`__

Verify that llistxattr(2) call with zero size returns the current size of the
list of extended attribute names, which can be used to determine the size of
the buffer that should be supplied in a subsequent llistxattr(2) call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

llseek01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llseek/llseek01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

llseek02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llseek/llseek02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

llseek03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/llseek/llseek03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lremovexattr01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lremovexattr/lremovexattr01.c>`__

lremovexattr(2) removes the extended attribute identified by a name and
associated with a given path in the filesystem. Unlike removexattr(2),
lremovexattr(2) removes the attribute from the symbolic link only, and not
the file. This test verifies that a simple call to lremovexattr(2) removes,
indeed, a previously set attribute key/value from a symbolic link, and the
symbolic link _only_.

Note:
According to attr(5), extended attributes are interpreted differently from
regular files, directories and symbolic links. User attributes are only
allowed for regular files and directories, thus the need of using trusted.*
attributes for this test.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lseek01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lseek/lseek01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lseek02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lseek/lseek02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lseek07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lseek/lseek07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lseek11
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lseek/lseek11.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lstat01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lstat/lstat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lstat02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lstat/lstat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

lstat03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/lstat/lstat03.c>`__

This test verifies that lstat() provides correct information according
with device, access time, block size, ownership, etc.
The implementation provides a set of tests which are specific for each one
of the `struct stat` used to read file and symlink information.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise03.c>`__

Check that successful madvise(2) MADV_DONTNEED operation will result in
zero-fill-on-demand pages for anonymous private mappings.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

madvise05
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ee53664bda16 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ee53664bda16>`_




.. raw:: html

    <hr>

madvise06
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise06.c>`__

Page fault occurs in spite that madvise(WILLNEED) system call is called
to prefetch the page. This issue is reproduced by running a program
which sequentially accesses to a shared memory and calls madvise(WILLNEED)
to the next page on a page fault.

This bug is present in all RHEL7 versions. It looks like this was fixed in
mainline kernel > v3.15 by the following patch:

 commit 55231e5c898c5c03c14194001e349f40f59bd300
 Author: Johannes Weiner <hannes@cmpxchg.org>
 Date:   Thu May 22 11:54:17 2014 -0700

    mm: madvise: fix MADV_WILLNEED on shmem swapouts

Two checks are performed, the first looks at how SwapCache
changes during madvise. When the pages are dirtied, about half
will be accounted for under Cached and the other half will be
moved into Swap. When madvise is run it will cause the pages
under Cached to also be moved to Swap while rotating the pages
already in Swap into SwapCached. So we expect that SwapCached has
roughly MEM_LIMIT bytes added to it, but for reliability the
PASS_THRESHOLD is much lower than that.

Secondly we run madvise again, but only on the first
PASS_THRESHOLD bytes to ensure these are entirely in RAM. Then we
dirty these pages and check there were (almost) no page
faults. Two faults are allowed incase some tasklet or something
else unexpected, but irrelevant procedure, registers a fault to
our process.

It also can reproduce the MADV_WILLNEED preformance problem.
It was introduced since 5.9 kernel with the following commit
  e6e88712e43b ("mm: optimise madvise WILLNEED")
and fixed since 5.10-rc5 kernel with the following commit
  66383800df9c ("mm: fix madvise WILLNEED performance problem").

Test timeout is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `55231e5c898c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=55231e5c898c>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `8de15e920dc8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8de15e920dc8>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `66383800df9c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=66383800df9c>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/swappiness
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory


.. raw:: html

    <hr>

madvise07
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise08
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise08.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/core_pattern


.. raw:: html

    <hr>

madvise09
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise09.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise10
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise10.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

madvise11
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise11.c>`__

Stress a possible race condition between memory pages allocation
and soft-offline of unrelated pages as explained in the commit:
  d4ae9916ea29 (mm: soft-offline: close the race against page allocation)

Control that soft-offlined pages get correctly replaced: with the
same content and without SIGBUS generation when accessed.

Test timeout defaults is 30 seconds.
Maximum runtime is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d4ae9916ea29 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d4ae9916ea29>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - hwpoison_inject
   * -  :c:struct:`needs_cmds <tst_test>`
     - | modprobe
       | rmmod
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_MEMORY_FAILURE=y
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

madvise12
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/madvise/madvise12.c>`__

Verify that MADV_GUARD_INSTALL is causing SIGSEGV when someone is accessing
memory advised with it.

This is a test for feature implemented in
662df3e5c376 ("mm: madvise: implement lightweight guard page mechanism")

**Algorithm**

- allocate a certain amount of memory
- advise memory with MADV_GUARD_INSTALL
- access to memory from within a child and verify it gets killed by SIGSEGV
- release memory with MADV_GUARD_REMOVE
- verify that memory has not been modified before child got killed
- modify memory within a new child
- verify that memory is accessable and child was not killed by SIGSEGV

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.13
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mallinfo01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mallinfo/mallinfo01.c>`__

Basic mallinfo() test. Refer to glibc test mallinfo2 test
https://sourceware.org/git/?p=glibc.git;a=blob;f=malloc/tst-mallinfo2.c

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mallinfo02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mallinfo/mallinfo02.c>`__

Basic mallinfo() test for malloc() using sbrk or mmap.
It size > MMAP_THRESHOLD, it will use mmap. Otherwise, use sbrk.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mallinfo2_01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mallinfo2/mallinfo2_01.c>`__

Basic mallinfo2() test.

Test hblkhd member of struct mallinfo2 whether overflow when setting 2G size.

Deprecated mallinfo() overflow in this case, that was the point for creating
mallinfo2().

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mallocstress
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mtest07/mallocstress.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 600 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mallopt01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mallopt/mallopt01.c>`__

Basic mallinfo() and mallopt() testing.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

matrix_mult
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/realtime/func/matrix_mult/matrix_mult.c>`__

Compare running sequential matrix multiplication routines
to running them in parallel to judge multiprocessor
performance

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

max_map_count
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/tunable/max_map_count.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/vm/overcommit_memory
       | /proc/sys/vm/max_map_count


.. raw:: html

    <hr>

mbind01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mbind/mbind01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mbind02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mbind/mbind02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a7f40cfe3b7a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a7f40cfe3b7a>`_




.. raw:: html

    <hr>

mbind03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mbind/mbind03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mbind04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mbind/mbind04.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

meltdown
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/meltdown.c>`__

Test for CVE-2017-5754 (Meltdown).

https://meltdownattack.com/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-5754 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | x86_64


.. raw:: html

    <hr>

membarrier01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/membarrier/membarrier01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.3.0


.. raw:: html

    <hr>

memcg_test_3
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/memcg/regression/memcg_test_3.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

memcmp01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memcmp/memcmp01.c>`__

The testcase for buffer comparison by check boundary conditions.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

memcontrol01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/memcg/memcontrol01.c>`__


Conversion of the first kself test in cgroup/test_memcontrol.c.
This test creates two nested cgroups with and without enabling the
memory controller.

The LTP API automatically adds controllers to subtree_control when
a child cgroup is added. So unlike the kselftest we remove the
controller after it being added automatically.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2


.. raw:: html

    <hr>

memcontrol02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/memcg/memcontrol02.c>`__


Conversion of second kself test in cgroup/test_memcontrol.c.

Original description:
"This test creates a memory cgroup, allocates some anonymous memory
and some pagecache and check memory.current and some memory.stat
values."

Note that the V1 rss and cache counters were renamed to anon and
file in V2. Besides error reporting, this test differs from the
kselftest in the following ways:

. It supports V1.
. It writes instead of reads to fill the page cache. Because no
  pages were allocated on tmpfs.
. It runs on most filesystems available
. On EXFAT and extN we change the margin of error between all and file
  memory to 50%. Because these allocate non-page-cache memory during writes.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`dev_min_size <tst_test>`
     - 300
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

memcontrol03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/memcg/memcontrol03.c>`__


Conversion of the third kself test in cgroup/test_memcontrol.c.

Original description:
"First, this test creates the following hierarchy:
A       memory.min = 50M,  memory.max = 200M
A/B     memory.min = 50M,  memory.current = 50M
A/B/C   memory.min = 75M,  memory.current = 50M
A/B/D   memory.min = 25M,  memory.current = 50M
A/B/E   memory.min = 500M, memory.current = 0
A/B/F   memory.min = 0,    memory.current = 50M

Usages are pagecache, but the test keeps a running
process in every leaf cgroup.
Then it creates A/G and creates a significant
memory pressure in it.

A/B    memory.current ~= 50M
A/B/C  memory.current ~= 33M
A/B/D  memory.current ~= 17M
A/B/E  memory.current ~= 0

After that it tries to allocate more than there is unprotected
memory in A available, and checks that memory.min protects
pagecache even in this case."

memory.min doesn't appear to exist on V1 so we only test on V2 like
the selftest. We do test on more file systems, but not tempfs
becaue it can't evict the page cache without swap. Also we avoid
filesystems which allocate extra memory for buffer heads.

The tolerances have been increased from the self tests.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | fuse
       | ntfs
       | tmpfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

memcontrol04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/controllers/memcg/memcontrol04.c>`__


Conversion of the forth kself test in cgroup/test_memcontrol.c.

Original description:
"First, this test creates the following hierarchy:
A       memory.low = 50M,  memory.max = 200M
A/B     memory.low = 50M,  memory.current = 50M
A/B/C   memory.low = 75M,  memory.current = 50M
A/B/D   memory.low = 25M,  memory.current = 50M
A/B/E   memory.low = 500M, memory.current = 0
A/B/F   memory.low = 0,    memory.current = 50M

Usages are pagecache
Then it creates A/G and creates a significant
memory pressure in it.

A/B    memory.current ~= 50M
A/B/C  memory.current ~= 33M
A/B/D  memory.current ~= 17M
A/B/E  memory.current ~= 0

After that it tries to allocate more than there is unprotected
memory in A available, and checks that memory.low protects
pagecache even in this case."

The closest thing to memory.low on V1 is soft_limit_in_bytes which
uses a different mechanism and has different semantics. So we only
test on V2 like the selftest. We do test on more file systems, but
not tempfs becaue it can't evict the page cache without swap. Also
we avoid filesystems which allocate extra memory for buffer heads.

The tolerances have been increased from the self tests.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`known-fail <tst_tag>`
     - Low events in F: https://bugzilla.suse.com/show_bug.cgi?id=1196298


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | fuse
       | ntfs
       | tmpfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ver <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

memcpy01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memcpy/memcpy01.c>`__

The testcase for buffer copy by check boundary conditions.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

memfd_create01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memfd_create/memfd_create01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

memfd_create02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memfd_create/memfd_create02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

memfd_create03
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memfd_create/memfd_create03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.14
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_NEEDS
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

memfd_create04
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memfd_create/memfd_create04.c>`__

Validating memfd_create() with MFD_HUGETLB and MFD_HUGE_x flags.

Attempt to create files in the hugetlbfs filesystem using different huge page
sizes.

**Algorithm**

memfd_create() should return non-negative value (fd) if the system supports
that particular huge page size.
On success, fd is returned. On failure, -1 is returned with ENODEV error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.14


.. raw:: html

    <hr>

memset01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/memset/memset01.c>`__

The testcase for test setting of buffer by check boundary conditions.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mesgq_nstest
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/mesgq_nstest.c>`__

Test SysV IPC message passing through different namespaces.

**Algorithm**

In parent process create a new mesgq with a specific key.
In cloned process try to access the created mesgq.

Test will PASS if the mesgq is readable when flag is None.
Test will FAIL if the mesgq is readable when flag is Unshare or Clone or
the message received is wrong.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare|none>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

migrate_pages02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/migrate_pages/migrate_pages02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/numa_balancing
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

migrate_pages03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/migrate_pages/migrate_pages03.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `4b0ece6fa016 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4b0ece6fa016>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

min_free_kbytes
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/tunable/min_free_kbytes.c>`__


Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/vm/overcommit_memory
       | /proc/sys/vm/min_free_kbytes


.. raw:: html

    <hr>

mincore02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mincore/mincore02.c>`__

This test case provides a functional validation for mincore system call.
We mmap a file of known size (multiple of page size) and lock it in
memory. Then we obtain page location information via mincore and compare
the result with the expected value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mincore03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mincore/mincore03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mincore04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mincore/mincore04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdir02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdir/mkdir02.c>`__

Verify that new directory created by mkdir(2) inherites the group ID from
the parent directory and S_ISGID bit, if the S_ISGID bit is set in the
parent directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdir03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdir/mkdir03.c>`__

Check mkdir() with various error conditions that should produce
EFAULT, ENAMETOOLONG, EEXIST, ENOENT, ENOTDIR, ELOOP and EROFS.

Testing on various types of files (symlinks, directories, pipes, devices, etc).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdir04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdir/mkdir04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdir05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdir/mkdir05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdir09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdir/mkdir09.c>`__

Create multiple processes which create subdirectories in the
same directory multiple times within test time.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mkdirat02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mkdirat/mkdirat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mknod01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mknod/mknod01.c>`__

Verify that mknod(2) successfully creates a filesystem node with
various modes.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mknod02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mknod/mknod02.c>`__

Verify that if mknod(2) creates a filesystem node in a directory which
does not have the set-group-ID bit set, new node will not inherit the
group ownership from its parent directory and its group ID will be the
effective group ID of the process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mknod09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mknod/mknod09.c>`__

Verify that mknod() fails with -1 and sets errno to EINVAL if the mode is
different than a normal file, device special file or FIFO.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock/mlock01.c>`__

Test mlock with various valid addresses and lengths.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock/mlock02.c>`__

Test for ENOMEM, EPERM errors.

1) mlock(2) fails with ENOMEM if some of the specified address range
   does not correspond to mapped pages in the address space of
   the process.

2) mlock(2) fails with ENOMEM if the caller had a non-zero RLIMIT_MEMLOCK
   soft resource limit, but tried to lock more memory than the limit
   permitted.  This limit is not enforced if the process is
   privileged (CAP_IPC_LOCK).

3) mlock(2) fails with EPERM if the caller was not privileged (CAP_IPC_LOCK)
   and its RLIMIT_MEMLOCK soft resource limit was 0.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock/mlock03.c>`__

This case is a regression test on old RHEL5.

Stack size mapping is decreased through mlock/munlock call.
See the following url:
https://bugzilla.redhat.com/show_bug.cgi?id=643426

This is to test kernel if it has a problem with shortening [stack]
mapping through several loops of mlock/munlock of /proc/self/maps.

From:
munlock     76KiB bfef2000-bff05000 rw-p 00000000 00:00 0          [stack]

To:
munlock     44KiB bfefa000-bff05000 rw-p 00000000 00:00 0          [stack]

with more iterations - could drop to 0KiB.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mlock04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock/mlock04.c>`__

This is a reproducer copied from one of LKML patch submission
https://lore.kernel.org/lkml/1296371720-4176-1-git-send-email-tm@tao.ma/

"In 5ecfda0, we do some optimization in mlock, but it causes
a very basic test case(attached below) of mlock to fail. So
this patch revert it with some tiny modification so that it
apply successfully with the lastest 38-rc2 kernel."

This bug was fixed by kernel
commit fdf4c587a7 ("mlock: operate on any regions with protection != PROT_NONE")

As this case does, mmaps a file with PROT_WRITE permissions but without
PROT_READ, so attempt to not unnecessarity break COW during mlock ended up
causing mlock to fail with a permission problem on unfixed kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `fdf4c587a793 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fdf4c587a793>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock/mlock05.c>`__

Verify mlock() causes pre-faulting of PTEs and prevent memory to be swapped out.

Find the new mapping in /proc/$pid/smaps and check Rss and Locked fields after
mlock syscall:
Rss and Locked size should be equal to the size of the memory allocation

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mlock201
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock2/mlock201.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock202
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock2/mlock202.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mlock203
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mlock2/mlock203.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap01.c>`__

Verify that mmap() succeeds when used to map a file where size of the
file is not a multiple of the page size, the memory area beyond the end
of the file to the end of the page is accessible. Also, verify that
this area is all zeroed and the modifications done to this area are
not written to the file.

mmap() should succeed returning the address of the mapped region.
The memory area beyond the end of file to the end of page should be
filled with zero. The changes beyond the end of file should not get
written to the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap02.c>`__

Verify that, mmap() call with PROT_READ and a file descriptor which is
open for read only, succeeds to map a file creating mapped memory with
read access.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap04.c>`__

Verify that, after a successful mmap() call, permission bits of the new
mapping in /proc/pid/maps file matches the prot and flags arguments in
mmap() call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mmap05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap05.c>`__

Verify that, mmap() call with 'PROT_NONE' and a file descriptor which is
open for read and write, succeeds to map the file creating mapped memory,
but any attempt to access the contents of the mapped region causes the
SIGSEGV signal.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap06.c>`__

Verify that, mmap() call fails with errno:

- EACCES, when a file mapping is requested but the file descriptor is not open for reading.
- EINVAL, when length argument is 0.
- EINVAL, when flags contains none of MAP_PRIVATE, MAP_SHARED, or MAP_SHARED_VALIDATE.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap08
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap08.c>`__

Verify that, mmap() calls fails with errno EBADF when a file mapping
is requested but the fd is not a valid file descriptor.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap09
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap09.c>`__

Verify that truncating a mmaped file works correctly.

Use ftruncate to:

1. shrink the file while it is mapped
2. grow the file while it is mapped
3. zero the size of the file while it is mapped

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap1
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mtest06/mmap1.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 180 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap12
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap12.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap13
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap13.c>`__

Verify that, mmap() call succeeds to create a file mapping with length
argument greater than the file size but any attempt to reference the
memory region which does not correspond to the file causes SIGBUS signal.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap14
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap14.c>`__

Verify basic functionality of mmap(2) with MAP_LOCKED.

mmap(2) should succeed returning the address of the mapped region,
and this region should be locked into memory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap15
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap15.c>`__

Verify that, a normal page cannot be mapped into a high memory region,
and mmap() call fails with either ENOMEM or EINVAL errno.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap16
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap16.c>`__

This is a regression test for a silent data corruption for a mmaped file
when filesystem gets out of space.

Fixed by commits:

 commit 0572639ff66dcffe62d37adfe4c4576f9fc398f4
 Author: Xiaoguang Wang <wangxg.fnst@cn.fujitsu.com>
 Date:   Thu Feb 12 23:00:17 2015 -0500

     ext4: fix mmap data corruption in nodelalloc mode when blocksize < pagesize

 commit d6320cbfc92910a3e5f10c42d98c231c98db4f60
 Author: Jan Kara <jack@suse.cz>
 Date:   Wed Oct 1 21:49:46 2014 -0400

     ext4: fix mmap data corruption when blocksize < pagesize

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d6320cbfc929 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d6320cbfc929>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `0572639ff66d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0572639ff66d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap17
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap17.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.17
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap18
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap18.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mmap19
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap19.c>`__

If the kernel fails to correctly flush the TLB entry, the second mmap
will not show the correct data.

**Algorithm**
 - create two files, write known data to the files
 - mmap the files, verify data
 - unmap files
 - remmap files, swap virtual addresses
 - check wheather if the memory content is correct

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap20
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mmap/mmap20.c>`__

Test mmap(2) with MAP_SHARED_VALIDATE flag.

Test expected EOPNOTSUPP errno when testing mmap(2) with MAP_SHARED_VALIDATE
flag and invalid flag.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.15
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmap3
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mtest06/mmap3.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Number of map-write-unmap loops
   * - -n
     - Number of worker threads
   * - -p
     - Turns on MAP_PRIVATE (default MAP_SHARED)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmapstress01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mmapstress/mmapstress01.c>`__

This test stresses mmaps, without dealing with fragments or anything!
It forks a specified number of children,
all of whom mmap the same file, make a given number of accesses
to random pages in the map (reading & writing and comparing data).
Then the child exits and the parent forks another to take its place.
Each time a child is forked, it stats the file and maps the full
length of the file.

This program continues to run until it either receives a SIGINT,
or times out (if a timeout value is specified).  When either of
these things happens, it cleans up its kids, then checks the
file to make sure it has the correct data.

Test timeout defaults is 30 seconds.
Maximum runtime is 12 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -d
     - Enable debug output
   * - -f
     - Initial filesize (default 4096)
   * - -m
     - Do random msync/fsyncs as well
   * - -o
     - Randomize the offset of file to map
   * - -p
     - Number of mapping children to create (default 1 < ncpus < 20)
   * - -P
     - Use a fixed pattern (default random)
   * - -r
     - Randomize number of pages map children check (random % 500), otherwise each child checks 500 pages
   * - -S
     - When non-zero, causes the sparse area to be left before the data, so that the actual initial filesize is sparseoffset + filesize (default 0)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mmapstress04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mmapstress/mmapstress04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount01.c>`__

Basic test that checks mount() syscall works on multiple filesystems.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - ntfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount02.c>`__

Check for basic errors returned by mount(2) system call.

- ENODEV if filesystem type not configured
- ENOTBLK if specialfile is not a block device
- EBUSY if specialfile is already mounted or it  cannot  be remounted
  read-only, because it still holds files open for writing.
- EINVAL if specialfile or device is invalid or a remount was attempted,
  while source was not already mounted on target.
- EFAULT if special file or device file points to invalid address space.
- ENAMETOOLONG if pathname was longer than MAXPATHLEN.
- ENOENT if pathname was empty or has a nonexistent component.
- ENOTDIR if not a directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount03.c>`__

Check mount(2) system call with various flags.

Verify that mount(2) syscall passes for each flag setting and validate
the flags:

- MS_RDONLY - mount read-only
- MS_NODEV - disallow access to device special files
- MS_NOEXEC - disallow program execution
- MS_REMOUNT - alter flags of a mounted FS
- MS_NOSUID - ignore suid and sgid bits
- MS_NOATIME - do not update access times
- MS_NODIRATIME - only update access_time for directory instead of all types
- MS_STRICTATIME - always update access times

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | ntfs
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - mount03_suid_child
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount04.c>`__

Verify that mount(2) returns -1 and sets errno to EPERM if the user
is not root.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount05.c>`__

Test for feature MS_BIND of mount, which performs a bind mount, making a file
or a directory subtree visible at another point within a file system.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | ntfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount06.c>`__

Test for feature MS_MOVE of mount, which moves an existing mount point to
a new location.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | ntfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount/mount07.c>`__

It is a basic test for MS_NOSYMFOLLOW mount option and is copied
from kernel selftests nosymfollow-test.c.

It tests to make sure that symlink traversal fails with ELOOP when
'nosymfollow' is set, but symbolic links can still be created, and
readlink(2) and realpath(3) still work properly. It also verifies
that statfs(2) correctly returns ST_NOSYMFOLLOW.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | ntfs
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 5.10
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mount_setattr01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mount_setattr/mount_setattr01.c>`__

Basic mount_setattr() test.
Test whether the basic mount attributes are set correctly.

Verify some MOUNT_SETATTR(2) attributes:

- MOUNT_ATTR_RDONLY - makes the mount read-only
- MOUNT_ATTR_NOSUID - causes the mount not to honor the
  set-user-ID and set-group-ID mode bits and file capabilities
  when executing programs.
- MOUNT_ATTR_NODEV - prevents access to devices on this mount
- MOUNT_ATTR_NOEXEC - prevents executing programs on this mount
- MOUNT_ATTR_NOSYMFOLLOW - prevents following symbolic links
  on this mount
- MOUNT_ATTR_NODIRATIME - prevents updating access time for
  directories on this mount

The functionality was added in v5.12.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mountns01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mountns/mountns01.c>`__

Tests a shared mount: shared mount can be replicated to as many
mountpoints and all the replicas continue to be exactly same.

**Algorithm**

- Creates directories DIR_A, DIR_B and files DIR_A/"A", DIR_B/"B"
- Unshares mount namespace and makes it private (so mounts/umounts have no
  effect on a real system)
- Bind mounts directory DIR_A to DIR_A
- Makes directory DIR_A shared
- Clones a new child process with CLONE_NEWNS flag
- There are two test cases (where X is parent namespace and Y child namespace):
 1. First test case
  .. X: bind mounts DIR_B to DIR_A
  .. Y: must see DIR_A/"B"
  .. X: umounts DIR_A
 2. Second test case
  .. Y: bind mounts DIR_B to DIR_A
  .. X: must see DIR_A/"B"
  .. Y: umounts DIR_A

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mountns02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mountns/mountns02.c>`__

Tests a private mount: private mount does not forward or receive
propagation.

**Algorithm**

- Creates directories DIR_A, DIR_B and files DIR_A/"A", DIR_B/"B"
- Unshares mount namespace and makes it private (so mounts/umounts have no
  effect on a real system)
- Bind mounts directory DIR_A to DIR_A
- Makes directory DIR_A private
- Clones a new child process with CLONE_NEWNS flag
- There are two test cases (where X is parent namespace and Y child
  namespace):
 1. First test case
  .. X: bind mounts DIR_B to DIR_A
  .. Y: must see DIR_A/"A" and must not see DIR_A/"B"
  .. X: umounts DIR_A
 2. Second test case
  .. Y: bind mounts DIR_B to DIR_A
  .. X: must see DIR_A/"A" and must not see DIR_A/"B"
  .. Y: umounts DIRA

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mountns03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mountns/mountns03.c>`__

Tests a slave mount: slave mount is like a shared mount except that
mount and umount events only propagate towards it.

**Algorithm**

- Creates directories DIRA, DIRB and files DIRA/"A", DIRB/"B"
- Unshares mount namespace and makes it private (so mounts/umounts have no
  effect on a real system)
- Bind mounts directory DIRA to itself
- Makes directory DIRA shared
- Clones a new child process with CLONE_NEWNS flag and makes "A" a slave
  mount
- There are two testcases (where X is parent namespace and Y child
  namespace):
 1. First test case
  .. X: bind mounts DIRB to DIRA
  .. Y: must see the file DIRA/"B"
  .. X: umounts DIRA
 2. Second test case
  .. Y: bind mounts DIRB to DIRA
  .. X: must see only the DIRA/"A" and must not see DIRA/"B" (as slave mount does
        not forward propagation)
  .. Y: umounts DIRA

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mountns04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mountns/mountns04.c>`__

Tests an unbindable mount: unbindable mount is an unbindable
private mount.

- Creates directories DIRA, DIRB and files DIRA/"A", DIRB/"B"
- Unshares mount namespace and makes it private (so mounts/umounts have no
  effect on a real system)
- Bind mounts directory DIRA to DIRA
- Makes directory DIRA unbindable
- Check if bind mount unbindable DIRA to DIRB fails as expected

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

move_mount01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/move_mount/move_mount01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

move_mount02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/move_mount/move_mount02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

move_mount03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/move_mount/move_mount03.c>`__

Test allow to mount beneath top mount feature added in kernel 6.5:
6ac392815628 ("fs: allow to mount beneath top mount")

Test based on:
https://github.com/brauner/move-mount-beneath

See also:

- https://lore.kernel.org/all/20230202-fs-move-mount-replace-v4-0-98f3d80d7eaa@kernel.org/
- https://lwn.net/Articles/930591/
- https://github.com/brauner/move-mount-beneath

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `6ac392815628f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6ac392815628f>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.5
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

move_pages04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/move_pages/move_pages04.c>`__

Verify that move_pages() properly reports failures when the memory area is
not valid, no page is mapped yet or the shared zero page is mapped.

**Algorithm**

     1. Pass the address of a valid memory area where no page is
        mapped yet (not read/written), the address of a valid memory area
        where the shared zero page is mapped (read, but not written to)
        and the address of an invalid memory area as page addresses to
        move_pages().
     2. Check if the corresponding status for "no page mapped" is set to
        -ENOENT. Note that kernels >= 4.3 [1] and < 6.12 [2] wrongly returned
        -EFAULT by accident.
     3. Check if the corresponding status for "shared zero page" is set to:
        -EFAULT. Note that kernels < 4.3 [1] wrongly returned -ENOENT.
     4. Check if the corresponding status for "invalid memory area" is set
        to -EFAULT.

  [1] d899844e9c98 "mm: fix status code which move_pages() returns for zero page"
  [2] 7dff875c9436 "mm/migrate: convert add_page_for_migration() from follow_page() to folio_walk"

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d899844e9c98 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d899844e9c98>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `7dff875c9436 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7dff875c9436>`_




.. raw:: html

    <hr>

move_pages12
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/move_pages/move_pages12.c>`__

*Test 1*

This is a regression test for the race condition between move_pages()
and freeing hugepages, where move_pages() calls follow_page(FOLL_GET)
for hugepages internally and tries to get its refcount without
preventing concurrent freeing.

This test can crash the buggy kernel, and the bug was fixed in:

  commit e66f17ff71772b209eed39de35aaa99ba819c93d
  Author: Naoya Horiguchi <n-horiguchi@ah.jp.nec.com>
  Date:   Wed Feb 11 15:25:22 2015 -0800

  mm/hugetlb: take page table lock in follow_huge_pmd()

*Test 2.1*

This is a regression test for the race condition, where move_pages()
and soft offline are called on a single hugetlb page concurrently.

This test can crash the buggy kernel, and was fixed by:

  commit c9d398fa237882ea07167e23bcfc5e6847066518
  Author: Naoya Horiguchi <n-horiguchi@ah.jp.nec.com>
  Date:   Fri Mar 31 15:11:55 2017 -0700

  mm, hugetlb: use pte_present() instead of pmd_present() in follow_huge_pmd()

*Test 2.2*

This is also a regression test for an race condition causing SIGBUS
in hugepage migration/fault.

This bug was fixed by:

  commit 4643d67e8cb0b3536ef0ab5cddd1cedc73fa14ad
  Author: Mike Kravetz <mike.kravetz@oracle.com>
  Date:   Tue Aug 13 15:38:00 2019 -0700

  hugetlbfs: fix hugetlb page migration/fault race causing SIGBUS

*Test 2.3*

The madvise() in the do_soft_online() was also triggering cases where soft
online returned EIO when page migration failed, which was fixed in:

   commit 3f4b815a439adfb8f238335612c4b28bc10084d8
   Author: Oscar Salvador <osalvador@suse.de>
   Date:   Mon Dec 14 19:11:51 2020 -0800

   mm,hwpoison: return -EBUSY when migration fails

Test timeout defaults is 30 seconds.
Maximum runtime is 240 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e66f17ff7177 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e66f17ff7177>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `c9d398fa2378 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c9d398fa2378>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `4643d67e8cb0 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4643d67e8cb0>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `3f4b815a439a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3f4b815a439a>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mprotect05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mprotect/mprotect05.c>`__

Testcase to check the mprotect(2) system call split and merge.

https://bugzilla.kernel.org/show_bug.cgi?id=217061


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `2fcd07b7ccd5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2fcd07b7ccd5>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mq_notify01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_notify/mq_notify01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -d
     - Print debug messages




.. raw:: html

    <hr>

mq_notify02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_notify/mq_notify02.c>`__

This test verifies that mq_notify() fails with EINVAL when invalid input
arguments are given.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mq_notify03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_notify/mq_notify03.c>`__

Test for NULL pointer dereference in mq_notify(CVE-2021-38604)

References links:
- https://sourceware.org/bugzilla/show_bug.cgi?id=28213

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`glibc-git <tst_tag>`
     - `b805aebd42 <https://sourceware.org/git/?p=glibc.git;a=commit;h=b805aebd42>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-38604 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-38604>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mq_open01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_open/mq_open01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mq_timedreceive01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_timedreceive/mq_timedreceive01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

mq_timedsend01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_timedsend/mq_timedsend01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

mq_unlink01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mq_unlink/mq_unlink01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mqns_01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mqns/mqns_01.c>`__

Create a mqueue inside the parent and check if it can be accessed from
the child namespace. Isolated and unshared process can't access to parent,
but plain process can.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Child process isolation <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mqns_02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mqns/mqns_02.c>`__

Create a mqueue with the same name in both parent and isolated/forked child,
then check namespace isolation.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Child process isolation <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

mqns_03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mqns/mqns_03.c>`__

Test mqueuefs from an isolated/forked process namespace.

**Algorithm**

Inside new IPC namespace:

- mq_open() /MQ1
- mount mqueue inside the temporary folder
- check for /MQ1 existance
- creat() /MQ2 inside the temporary folder
- umount
- mount mqueue inside the temporary folder
- check /MQ1 existance
- check /MQ2 existance
- umount

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Child process isolation <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mqns_04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/mqns/mqns_04.c>`__

Test mqueuefs manipulation from child/parent namespaces.

**Algorithm**

- parent creates mqueue folder in <tmpdir>
- child mq_open() /MQ1 mqueue
- child mounts mqueue there
- parent checks for <tmpdir>/mqueue/MQ1 existence
- child exits
- parent checks for <tmpdir>/mqueue/MQ1 existence
- parent tries 'touch <tmpdir>/mqueue/MQ2' -> should fail
- parent umount mqueuefs

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Child process isolation <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mremap06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mremap/mremap06.c>`__

Bug reproducer for 7e7757876f25 ("mm/mremap: fix vm_pgoff in vma_merge() case 3")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `7e7757876f25 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7e7757876f25>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mseal01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mseal/mseal01.c>`__

This is a smoke test that verifies if mseal() protects specific VMA portions
of a process. According to documentation, the syscall should protect memory
from the following actions:

- unmapping, moving to another location, and shrinking the size, via munmap()
  and mremap()
- moving or expanding a different VMA into the current location, via mremap()
- modifying a VMA via mmap(MAP_FIXED)
- mprotect() and pkey_mprotect()
- destructive madvice() behaviors (e.g. MADV_DONTNEED) for anonymous memory,
  when users don't have write permission to the memory

Any of the described actions is recognized via EPERM errno.

TODO: support both raw syscall and libc wrapper via .test_variants.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

mseal02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/mseal/mseal02.c>`__

Check various errnos for mseal(2).

- mseal() fails with EINVAL if flags is invalid.
- mseal() fails with EINVAL if the start address is not page aligned.
- mseal() fails with EINVAL if address range overflows.
- mseal() fails with ENOMEM if the start address is not allocated.
- mseal() fails with ENOMEM if the end address is not allocated.
- mseal() fails with ENOMEM if there is a gap (unallocated memory) between start and end address.

TODO: support both raw syscall and libc wrapper via .test_variants.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

msg_comm
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/msg_comm.c>`__

Test SysV IPC message passing through different processes.

**Algorithm**

1. Clones two child processes with CLONE_NEWIPC flag, each child
   gets System V message queue (msg) with the _identical_ key.
2. Child1 appends a message with identifier #1 to the message queue.
3. Child2 appends a message with identifier #2 to the message queue.
4. Appends to the message queue with the identical key but from
   two different IPC namespaces should not interfere with each other
   and so child1 checks whether its message queue doesn't contain
   a message with identifier #2, if it doesn't test passes, otherwise
   test fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

msgctl05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl05.c>`__

Cross verify the _high fields being set to 0 by the kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl06.c>`__

Call msgctl() with MSG_INFO flag and check that:

* The returned index points to a valid MSG by calling MSG_STAT_ANY
* Also count that valid indexes < returned max index sums up to used_ids
* And the data are consistent with /proc/sysvipc/msg

There is a possible race between the call to the msgctl() and read from the
proc file so this test cannot be run in parallel with any IPC testcases that
adds or removes MSG queues.

Note what we create a MSG segment in the test setup and send msg to make sure
that there is at least one during the testrun.

Also note that for MSG_INFO the members of the msginfo structure have
completely different meaning than their names seems to suggest.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgctl12
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgctl/msgctl12.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

msgget01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgget/msgget01.c>`__

Create a message queue, write a message to it and
read it back.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgget02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgget/msgget02.c>`__

Test for EEXIST, ENOENT, EACCES errors.

-  msgget(2) fails if a message queue exists for key and msgflg
   specified both IPC_CREAT and IPC_EXCL.
-  msgget(2) fails if no message queue exists for key and msgflg
   did not specify IPC_CREAT.
-  msgget(2) fails if a message queue exists for key, but the
   calling process does not have permission to access the queue,
   and does not have the CAP_IPC_OWNER capability.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgget03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgget/msgget03.c>`__

Test for ENOSPC error.

ENOSPC -  All possible message queues have been taken (MSGMNI)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/msgmni


.. raw:: html

    <hr>

msgget04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgget/msgget04.c>`__

It is a basic test for msg_next_id.
msg_next_id specifies desired id for next allocated IPC message. By
default it's equal to -1, which means generic allocation logic.
Possible values to set are in range {0..INT_MAX}.
The value will be set back to -1 by kernel after successful IPC object
allocation.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CHECKPOINT_RESTORE=y


.. raw:: html

    <hr>

msgget05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgget/msgget05.c>`__

It is a basic test for msg_next_id.
When the message queue identifier that msg_next_id stored is already in use,
call msgget with different key just use another unused value in range
[0,INT_MAX]. Kernel doesn't guarantee the desired id.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CHECKPOINT_RESTORE=y


.. raw:: html

    <hr>

msgrcv01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgrcv02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgrcv03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CHECKPOINT_RESTORE


.. raw:: html

    <hr>

msgrcv05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgrcv06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgrcv07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgrcv08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgrcv/msgrcv08.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `e7ca2552369c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e7ca2552369c>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgsnd01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgsnd/msgsnd01.c>`__

Verify that msgsnd(2) enqueues a message correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

msgsnd02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgsnd/msgsnd02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgsnd05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgsnd/msgsnd05.c>`__

Verify that msgsnd(2) fails and sets correct errno:

- EAGAIN if the message can't be sent due to the msg_qbytes limit for the
  queue and IPC_NOWAIT is specified
- EINTR if msgsnd(2) sleeps on a full message queue condition and the process
  catches a signal

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgsnd06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgsnd/msgsnd06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

msgstress01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/msgstress/msgstress01.c>`__

Stress test for SysV IPC. We send multiple messages at the same time,
checking that we are not loosing any byte once we receive the messages
from multiple children.

The number of messages to send is determined by the free slots available
in SysV IPC and the available number of children which can be spawned by
the process. Each sender will spawn multiple messages at the same time and
each receiver will read them one by one.

Test timeout defaults is 30 seconds.
Maximum runtime is 180 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -n
     - Number of messages to send (default: 1000)
   * - -l
     - Number iterations per message (default: TST_TO_STR(100000))




.. raw:: html

    <hr>

msync04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/msync/msync04.c>`__

Verify msync() after writing into mmap()-ed file works.

Write to mapped region and sync the memory back with file. Check the page
is no longer dirty after msync() call.

In case the dirty bit is not set, check the content of file to verify
the data is stored on disk.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

mtest01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/mtest01/mtest01.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -c
     - Size of chunk in bytes to malloc on each pass
   * - -b
     - Maximum number of bytes to allocate before stopping
   * - -p
     - Percent of total memory used at which the program stops
   * - -w
     - Write to the memory after allocating
   * - -v
     - Verbose




.. raw:: html

    <hr>

munlock01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/munlock/munlock01.c>`__

Test munlock with various valid addresses and lengths.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

munlock02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/munlock/munlock02.c>`__

Test for ENOMEM error.

munlock(2) fails with ENOMEM if some of the specified address range
does not correspond to mapped pages in the address space of the
process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

munlockall01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/munlockall/munlockall01.c>`__

Verify that munlockall(2) unlocks all previously locked memory.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

name_to_handle_at01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/name_to_handle_at/name_to_handle_at01.c>`__

Basic name_to_handle_at() tests.

**Algorithm**
 - Check that EOVERFLOW is returned as expected by name_to_handle_at().
 - Check that we were able to access a file's stat with name_to_handle_at()
   and open_by_handle_at().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

name_to_handle_at02
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/name_to_handle_at/name_to_handle_at02.c>`__

Failure tests for name_to_handle_at().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

nanosleep01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nanosleep/nanosleep01.c>`__

Verify that nanosleep() should return with value 0 and the process should be
suspended for time specified by timespec structure.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - nanosleep()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

nanosleep02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nanosleep/nanosleep02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

nanosleep04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nanosleep/nanosleep04.c>`__

Verify that nanosleep() returns -1 and sets errno to EINVAL when failing to suspend the
execution of a process if the specified pause time is invalid.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

netns_netlink
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/netns/netns_netlink.c>`__

Tests a netlink interface inside a new network namespace.

- Unshares a network namespace (so network related actions
  have no effect on a real system).
- Forks a child which creates a NETLINK_ROUTE netlink socket
  and listens to RTMGRP_LINK (network interface create/delete/up/down)
  multicast group.
- Child then waits for parent approval to receive data from socket
- Parent creates a new TAP interface (dummy0) and immediately
  removes it (which should generate some data in child's netlink socket).
  Then it allows child to continue.
- As the child was listening to RTMGRP_LINK multicast group, it should
  detect the new interface creation/deletion (by reading data from netlink
  socket), if so, the test passes, otherwise it fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_NET_NS=y
       | CONFIG_TUN
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

netstress
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/netstress/netstress.c>`__


Test timeout is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -f
     - Use TFO API, default is old API
   * - -F
     - TCP_FASTOPEN_CONNECT socket option and standard API
   * - -t
     - Set tcp_fastopen value
   * - -S
     - Source address to bind
   * - -g
     - Server port
   * - -b
     - Low latency busy poll timeout
   * - -T
     - Tcp (default), udp, udp_lite, dccp, sctp
   * - -z
     - Enable SO_ZEROCOPY
   * - -P
     - Enable SO_REUSEPORT
   * - -d
     - Bind to device x
   * - -H
     - Server name or IP address
   * - -l
     - Become client, default is server
   * - -a
     - Number of clients running in parallel
   * - -r
     - Number of client requests
   * - -n
     - Client message size
   * - -N
     - Server message size
   * - -m
     - Receive timeout in milliseconds (not used by UDP/DCCP client)
   * - -c
     - Path to file where result is saved
   * - -A
     - Max payload length (generated randomly)
   * - -R
     - Server requests after which conn.closed
   * - -q
     - TFO queue
   * - -B
     - Run in background, arg is the process directory


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

nfs05_make_tree
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/nfs/nfs_stress/nfs05_make_tree.c>`__


Test timeout is 300 seconds.






.. raw:: html

    <hr>

nfs_flock
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/nfs/nfslock01/nfs_flock.c>`__

Program for testing file locking. The original data file consists of
characters from 'A' to 'Z'. The data file after running this program
would consist of lines with 1's in even lines and 0's in odd lines.

Used in nfslock01.sh.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

nfs_flock_dgen
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/nfs/nfslock01/nfs_flock_dgen.c>`__

Tool to generate data for testing file locking.
Used in nfslock01.sh.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

nft02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/iptables/nft02.c>`__

CVE-2023-31248

Test for use-after-free when adding a new rule to a chain deleted
in the same netlink message batch.

Kernel bug fixed in:

 commit 515ad530795c118f012539ed76d02bacfd426d89
 Author: Thadeu Lima de Souza Cascardo <cascardo@canonical.com>
 Date:   Wed Jul 5 09:12:55 2023 -0300

 netfilter: nf_tables: do not ignore genmask when looking up chain by id

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `515ad530795c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=515ad530795c>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2023-31248 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-31248>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NF_TABLES


.. raw:: html

    <hr>

nice01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nice/nice01.c>`__

Verify that root can provide a negative value to nice() system call and hence
root can decrease the nice value of the process using nice().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

nice02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nice/nice02.c>`__

Verify that any user can successfully increase the nice value of
the process by passing a higher increment value (> max. applicable limits)
to nice() system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

nice03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nice/nice03.c>`__

Verify that any user can successfully increase the nice value of
the process by passing an increment value (< max. applicable limits) to
nice() system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

nice04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nice/nice04.c>`__

Verify that, nice(2) fails when, a non-root user attempts to increase
the priority of a process by specifying a negative increment value.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

nice05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/nice/nice05.c>`__

1. Create a high nice thread and a low nice thread, the main
   thread wake them at the same time
2. Both threads run on the same CPU
3. Verify that the low nice thread executes more time than
   the high nice thread

Test timeout defaults is 30 seconds.
Maximum runtime is 3 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

oom01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/oom/oom01.c>`__

Out Of Memory (OOM) test

Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/overcommit_memory


.. raw:: html

    <hr>

oom02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/oom/oom02.c>`__

Out Of Memory (OOM) test for mempolicy - need NUMA system support

Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/overcommit_memory
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

oom03
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/oom/oom03.c>`__

Out Of Memory (OOM) test for Memory Resource Controller

Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/overcommit_memory
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

oom04
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/oom/oom04.c>`__

Out Of Memory (OOM) test for CPUSET

Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/overcommit_memory
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - cpuset
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

oom05
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/oom/oom05.c>`__

Out Of Memory (OOM) test for MEMCG and CPUSET

Test timeout is TST_UNLIMITED_TIMEOUT seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/vm/overcommit_memory
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - | memory
       | cpuset
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

open01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open02.c>`__

1. open a new file without O_CREAT, ENOENT should be returned.
2. open a file with O_RDONLY | O_NOATIME and the caller was not
privileged, EPERM should be returned.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open03.c>`__

Testcase to check open() with O_RDWR | O_CREAT.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open04.c>`__

Verify that open(2) fails with EMFILE when per-process limit on the number
of open file descriptors has been reached.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open06.c>`__

Verify that open(2) fails with ENXIO when
O_NONBLOCK | O_WRONLY is set, the named file is a FIFO,
and no process has the FIFO open for reading.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open07
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open07.c>`__

Test functionality and error conditions of open(O_NOFOLLOW) system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open08
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open08.c>`__

Verify that open() fails with:

- EEXIST when pathname already exists and O_CREAT and O_EXCL were used
- EISDIR when pathname refers to a directory and the access requested
  involved writing
- ENOTDIR when O_DIRECTORY was specified and pathname was not a directory
- ENAMETOOLONG when pathname was too long
- EACCES when requested access to the file is not allowed
- EFAULT when pathname points outside the accessible address space

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

open09
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open09.c>`__

This test verifies that a file opened with O_RDONLY can't be writable
and it verifies that a file opened with O_WRONLY can't be readable.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open10
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open10.c>`__

Verify that the group ID and setgid bit are set correctly when a new file
is created.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open11
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open11.c>`__

Basic tests for open(2) and make sure open(2) works and handles error
conditions correctly.

There are 28 test cases:

1. Open regular file O_RDONLY
2. Open regular file O_WRONLY
3. Open regular file O_RDWR
4. Open regular file O_RDWR | O_SYNC
5. Open regular file O_RDWR | O_TRUNC
6. Open directory O_RDONLY
7. Open directory O_RDWR, expect EISDIR
8. Open regular file O_DIRECTORY, expect ENOTDIR
9. Open hard link file O_RDONLY
10. Open hard link file O_WRONLY
11. Open hard link file O_RDWR
12. Open symlink file O_RDONLY
13. Open symlink file O_WRONLY
14. Open symlink file O_RDWR
15. Open symlink directory O_RDONLY
16. Open symlink directory O_WRONLY, expect EISDIR
17. Open symlink directory O_RDWR, expect EISDIR
18. Open device special file O_RDONLY
19. Open device special file O_WRONLY
20. Open device special file O_RDWR
21. Open non-existing regular file in existing dir
22. Open link file O_RDONLY | O_CREAT
23. Open symlink file O_RDONLY | O_CREAT
24. Open regular file O_RDONLY | O_CREAT
25. Open symlink directory O_RDONLY | O_CREAT, expect EISDIR
26. Open directory O_RDONLY | O_CREAT, expect EISDIR
27. Open regular file O_RDONLY | O_TRUNC, behaviour is undefined but should
    not oops or hang
28. Open regular file(non-empty) O_RDONLY | O_TRUNC, behaviour is undefined
    but should not oops or hang

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_devfs <tst_test>`
     - 1


.. raw:: html

    <hr>

open15
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open/open15.c>`__

This test verifies that open() is working correctly on symlink()
generated files. We generate a file via symlink, then we read both from file
and symlink, comparing that data has been correctly written.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open_by_handle_at01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open_by_handle_at/open_by_handle_at01.c>`__

Basic open_by_handle_at() tests.

**Algorithm**

Check that we were able to access a file's stat which is opened with
open_by_handle_at().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

open_by_handle_at02
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open_by_handle_at/open_by_handle_at02.c>`__

Failure tests for open_by_handle_at().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open_tree01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open_tree/open_tree01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

open_tree02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/open_tree/open_tree02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

openat01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/openat/openat01.c>`__

This test case will verify basic function of openat.

- pathname is relative, then it is interpreted relative to the directory
  referred to by the file descriptor dirfd

- pathname is absolute, then dirfd is ignored

- ENODIR pathname is a relative pathname and dirfd is a file
  descriptor referring to a file other than a directory

- EBADF dirfd is not a valid file descriptor

- pathname is relative and dirfd is the special value AT_FDCWD, then pathname
  is interpreted relative to the current working directory of the calling
  process

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

openat04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/openat/openat04.c>`__

Check setgid strip logic whether works correctly when creating tmpfile under
filesystem without POSIX ACL supported(by using noacl mount option). Test it
with umask S_IXGRP and also check file mode whether has filtered S_IXGRP.

Fixed in:

 commit ac6800e279a22b28f4fc21439843025a0d5bf03e
 Author: Yang Xu <xuyang2018.jy@fujitsu.com>
 Date:   Thu July 14 14:11:26 2022 +0800

 fs: Add missing umask strip in vfs_tmpfile

The most code is pasted form creat09.c.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ac6800e279a2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ac6800e279a2>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `426b4ca2d6a5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=426b4ca2d6a5>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | ntfs
       | vfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

openat201
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/openat2/openat201.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

openat202
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/openat2/openat202.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

openat203
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/openat2/openat203.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

overcommit_memory
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/tunable/overcommit_memory.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -R
     - Percentage of overcommitting memory


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/vm/overcommit_memory
       | /proc/sys/vm/overcommit_ratio
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

pathconf01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pathconf/pathconf01.c>`__

Check the basic functionality of the pathconf(2) system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pathconf02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pathconf/pathconf02.c>`__

Verify that,

- pathconf() fails with ENOTDIR if a component used as a directory
  in path is not in fact a directory.
- pathconf() fails with ENOENT if path is an empty string.
- pathconf() fails with ENAMETOOLONG if path is too long.
- pathconf() fails with EINVA if name is invalid.
- pathconf() fails with EACCES if search permission is denied for
  one of the directories in the path prefix of path.
- pathconf() fails with ELOOP if too many symbolic links were
  encountered while resolving path.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pause01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pause/pause01.c>`__

Verify that, pause() returns -1 and sets errno to EINTR after receipt of a
signal which is caught by the calling process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pause02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pause/pause02.c>`__

Verifies that pause() does not return after proccess receives a SIGKILL signal.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pcrypt_aead01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/crypto/pcrypt_aead01.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d76c68109f37 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d76c68109f37>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-18075 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-18075>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

perf_event_open02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/perf_event_open/perf_event_open02.c>`__


Test timeout is 72 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -v
     - Verbose output


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

perf_event_open03
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/perf_event_open/perf_event_open03.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 300 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `7bdb157cdebb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7bdb157cdebb>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2020-25704 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-25704>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

personality01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/personality/personality01.c>`__

Tries to set different personalities.

We set the personality in a child process since it's not guaranteed that we
can set it back in some cases. I.e. PER_LINUX32 cannot be unset on some 64
bit archs.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

personality02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/personality/personality02.c>`__

This test checks if select() timeout is not updated when personality with
STICKY_TIMEOUTS is used.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pidfd_getfd01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_getfd/pidfd_getfd01.c>`__

Basic pidfd_getfd() test:

- the close-on-exec flag is set on the file descriptor returned by
  pidfd_getfd
- use kcmp to check whether a file descriptor idx1 in the process pid1
  refers to the same open file description as file descriptor idx2 in
  the process pid2

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_getfd02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_getfd/pidfd_getfd02.c>`__

Tests basic error handling of the pidfd_open syscall.

- EBADF pidfd is not a valid PID file descriptor
- EBADF targetfd is not an open file descriptor in the process referred
  to by pidfd
- EINVAL flags is not 0
- ESRCH the process referred to by pidfd does not exist (it has terminated
  and been waited on)
- EPERM the calling process doesn't have PTRACE_MODE_ATTACH_REALCREDS permissions
  over the process referred to by pidfd

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_open01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_open/pidfd_open01.c>`__

Basic pidfd_open() test:

- Fetch the PID of the current process and try to get its file descriptor.
- Check that the close-on-exec flag is set on the file descriptor.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pidfd_open02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_open/pidfd_open02.c>`__

Tests basic error handling of the pidfd_open syscall.

- ESRCH the process specified by pid does not exist
- EINVAL pid is not valid
- EINVAL flags is not valid

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pidfd_open03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_open/pidfd_open03.c>`__

This program opens the PID file descriptor of the child process created with
fork(). It then uses poll to monitor the file descriptor for process exit, as
indicated by an EPOLLIN event.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_open04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_open/pidfd_open04.c>`__

Verify that the PIDFD_NONBLOCK flag works with pidfd_open() and
that waitid() with a non-blocking pidfd returns EAGAIN.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_send_signal01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_send_signal/pidfd_send_signal01.c>`__

Tests if the pidfd_send_signal syscall behaves
like rt_sigqueueinfo when a pointer to a siginfo_t
struct is passed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_send_signal02
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_send_signal/pidfd_send_signal02.c>`__

Tests basic error handling of the pidfd_send_signal
system call.

- EINVAL Pass invalid flag value to syscall (value chosen
  to be unlikely to collide with future extensions)
- EBADF Pass a file descriptor that is corresponding to a
  regular file instead of a pid directory
- EINVAL Pass a signal that is different from the one used
  to initialize the siginfo_t struct
- EPERM Try to send signal to other process (init) with
  missing privileges

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidfd_send_signal03
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pidfd_send_signal/pidfd_send_signal03.c>`__

This test checks if the pidfd_send_signal syscall wrongfully sends
a signal to a new process which inherited the PID of the actual
target process.

In order to do so it is necessary to start a process with a pre-
determined PID. This is accomplished by writing to the
/proc/sys/kernel/ns_last_pid file.

By utilizing this, this test forks two children with the same PID.
It is then checked, if the syscall will send a signal to the second
child using the pidfd of the first one.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns01.c>`__

Clone a process with CLONE_NEWPID flag and check:

- child process ID must be 1
- parent process ID must be 0

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_PID_NS


.. raw:: html

    <hr>

pidns02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns02.c>`__

Clone a process with CLONE_NEWPID flag and check:

- child session ID must be 1
- parent process group ID must be 1

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_PID_NS


.. raw:: html

    <hr>

pidns03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns03.c>`__

Clone a process with CLONE_NEWPID flag and check if procfs mounted folder
belongs to the new pid namespace by looking at /proc/self .

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_PID_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns04.c>`__

Clone a process with CLONE_NEWPID flag and check that child container does
not get kill itself with SIGKILL.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns05.c>`__

Clone a process with CLONE_NEWPID flag and create many levels of child
containers. Then kill container init process from parent and check if all
containers have been killed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns06.c>`__

Clone a process with CLONE_NEWPID flag and check that parent process can't
be killed from child namespace.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns10
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns10.c>`__

Clone a process with CLONE_NEWPID flag and check that killing subprocesses
from child namespace will raise ESRCH error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns12
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns12.c>`__

Clone a process with CLONE_NEWPID flag and verifies that siginfo->si_pid is
set to 0 if sender (parent process) is not in the receiver's namespace.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_PID_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns13
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns13.c>`__

The pidns13.c testcase checks container init, for async I/O
triggered by peer namespace process.

**Algorithm**

* create a pipe in parent namespace
* create two PID namespace containers(cinit1 and cinit2)
* in cinit1, set pipe read end to send SIGUSR1 for asynchronous I/O
* let cinit2 trigger async I/O on pipe write end
* in signal info, check si_code to be POLL_IN and si_fd to be pipe read fd

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns16
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns16.c>`__

Clone a process with CLONE_NEWPID flag and verifies that siginfo->si_pid is
set to 0 if sender (parent process) sent the signal. Then send signal from
container itself and check if siginfo->si_pid is set to 1.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns17
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns17.c>`__

Clone a process with CLONE_NEWPID flag and spawn many children inside the
container. Then terminate all children and check if they were signaled.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns20
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns20.c>`__

Clone a process with CLONE_NEWPID flag, block SIGUSR1 signal before sending
it from parent and check if it's received once SIGUSR1 signal is unblocked.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_PID_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns30
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns30.c>`__

Clone a process with CLONE_NEWPID flag, register notification on a posix
mqueue and send a mqueue message from the parent. Then check if signal
notification contains si_pid of the parent.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns31
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns31.c>`__

Clone a process with CLONE_NEWPID flag, register notification on a posix
mqueue and send a mqueue message from the child. Then check if signal
notification contains si_pid of the child.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pidns32
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/pidns/pidns32.c>`__

Clone a process with CLONE_NEWPID flag and check for the maxium amount of
nested containers.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pipe01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pipe03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe03.c>`__

Verify that, an attempt to write to the read end of a pipe fails with EBADF
and an attempt to read from the write end of a pipe also fails with EBADF.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe06.c>`__

Verify that, pipe(2) syscall fails with errno EMFILE when
limit on the number of open file descriptors has been reached.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe07
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe07.c>`__

Verify that, pipe(2) syscall can open the maximum number of
file descriptors permitted.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe08
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe08.c>`__

Verify that, on any attempt to write to a pipe which is closed for
reading will generate a SIGPIPE signal and write will fail with
EPIPE errno.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe10
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe10.c>`__

Verify that, when a parent process opens a pipe, a child process can
read from it.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe11
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe11.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe12
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe12.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe13
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe13.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `6551d5c56eb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6551d5c56eb>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pipe14
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe14.c>`__

Verify that, if the write end of a pipe is closed, then a process reading
from the pipe will see end-of-file (i.e., read() returns 0) once it has
read all remaining data in the pipe.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe15
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe/pipe15.c>`__

This is a regression test for hangup on pipe operations. See
https://www.spinics.net/lists/linux-api/msg49762.html for
additional context. It tests that pipe operations do not block
indefinitely when going to the soft limit on the total size of
all pipes created by a single user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `46c4c9d1beb7 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=46c4c9d1beb7>`_




.. raw:: html

    <hr>

pipe2_01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe2/pipe2_01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pipe2_02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe2/pipe2_02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - pipe2_02_child
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pipe2_04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pipe2/pipe2_04.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pivot_root01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pivot_root/pivot_root01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pkey01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pkeys/pkey01.c>`__

Memory Protection Keys for Userspace (PKU aka PKEYs) is a Skylake-SP
server feature that provides a mechanism for enforcing page-based
protections, but without requiring modification of the page tables
when an application changes protection domains. It works by dedicating
4 previously ignored bits in each page table entry to a "protection key",
giving 16 possible keys.

Basic method for PKEYs testing:

1. test allocates a pkey(e.g. PKEY_DISABLE_ACCESS) via pkey_alloc()
2. pkey_mprotect() apply this pkey to a piece of memory(buffer)
3. check if access right of the buffer has been changed and take effect
4. remove the access right(pkey) from this buffer via pkey_mprotect()
5. check if buffer area can be read or write after removing pkey
6. pkey_free() releases the pkey after using it

Looping around this basic test on different types of memory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`hugepages <tst_test>`
     - 1, TST_REQUEST
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

poll01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/poll/poll01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

poll02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/poll/poll02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - poll()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

posix_fadvise01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fadvise/posix_fadvise01.c>`__

Verify that posix_fadvise() returns 0 for permissible ADVISE value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

posix_fadvise02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fadvise/posix_fadvise02.c>`__

Verify that posix_fadvise() returns EBADF for wrong file descriptor.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

posix_fadvise03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fadvise/posix_fadvise03.c>`__

Verify that posix_fadvise() returns EINVAL for the ADVISE value not
permissible on the architecture.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

posix_fadvise04
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/fadvise/posix_fadvise04.c>`__

Verify that posix_fadvise() returns ESPIPE for pipe descriptor.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ppoll01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ppoll/ppoll01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

prctl01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl01.c>`__

Basic test for PR_SET_PDEATHSIG/PR_GET_PDEATHSIG

Use PR_SET_PDEATHSIG to set SIGUSR2 signal and PR_GET_PDEATHSIG should
receive this signal.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

prctl02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl02.c>`__

- EINVAL when an invalid value is given for option
- EINVAL when option is PR_SET_PDEATHSIG & arg2 is not zero or a valid
  signal number
- EINVAL when option is PR_SET_DUMPABLE & arg2 is neither
  SUID_DUMP_DISABLE nor SUID_DUMP_USER
- EFAULT when arg2 is an invalid address
- EFAULT when option is PR_SET_SECCOMP & arg2 is SECCOMP_MODE_FILTER &
  arg3 is an invalid address
- EACCES when option is PR_SET_SECCOMP & arg2 is SECCOMP_MODE_FILTER &
  the process does not have the CAP_SYS_ADMIN capability
- EINVAL when option is PR_SET_TIMING & arg2 is not PR_TIMING_STATISTICAL
- EINVAL when option is PR_SET_NO_NEW_PRIVS & arg2 is not equal to 1 &
  arg3 is zero
- EINVAL when option is PR_SET_NO_NEW_PRIVS & arg2 is equal to 1 & arg3
  is nonzero
- EINVAL when options is PR_GET_NO_NEW_PRIVS & arg2, arg3, arg4, or arg5
  is nonzero
- EINVAL when options is PR_SET_THP_DISABLE & arg3, arg4, arg5 is non-zero.
- EINVAL when options is PR_GET_THP_DISABLE & arg2, arg3, arg4, or arg5 is
  nonzero
- EINVAL when options is PR_CAP_AMBIENT & arg2 has an invalid value
- EINVAL when options is PR_CAP_AMBIENT & an unused argument such as arg4,
  arg5, or, in the case of PR_CAP_AMBIENT_CLEAR_ALL, arg3 is nonzero
- EINVAL when options is PR_CAP_AMBIENT & arg2 is PR_CAP_AMBIENT_LOWER,
  PR_CAP_AMBIENT_RAISE, or PR_CAP_AMBIENT_IS_SET and arg3 does not specify
  a valid capability
- EINVAL when option is PR_GET_SPECULATION_CTRL and unused arguments is
  nonzero
- EPERM when option is PR_SET_SECUREBITS and the caller does not have the
  CAP_SETPCAP capability
- EPERM when option is PR_CAPBSET_DROP and the caller does not have the
  CAP_SETPCAP capability

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - | TST_CAP(TST_CAP_DROP,CAP_SYS_ADMIN)
       | TST_CAP(TST_CAP_DROP,CAP_SETPCAP)


.. raw:: html

    <hr>

prctl03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl03.c>`__

Test PR_SET_CHILD_SUBREAPER and PR_GET_CHILD_SUBREAPER of prctl(2).

- If PR_SET_CHILD_SUBREAPER marks a process as a child subreaper, it
  fulfills the role of init(1) for its descendant orphaned process.
  The PPID of its orphaned process will be reparented to the subreaper
  process, and the subreaper process can receive a SIGCHLD signal and
  wait(2) on the orphaned process to discover corresponding termination
  status.

- The setting of PR_SET_CHILD_SUBREAPER is not inherited by children
  reated by fork(2).

- PR_GET_CHILD_SUBREAPER can get the setting of PR_SET_CHILD_SUBREAPER.

These flags was added by kernel commit ebec18a6d3aa:
"prctl: add PR_{SET,GET}_CHILD_SUBREAPER to allow simple process supervision"

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

prctl05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl05.c>`__

Test PR_GET_NAME and PR_SET_NAME of prctl(2).

- Set the name of the calling thread, the name can be up to 16 bytes
  long, including the terminating null byte. If exceeds 16 bytes, the
  string is silently truncated.

- Return the name of the calling thread, the buffer should allow space
  for up to 16 bytes, the returned string will be null-terminated.

- Check /proc/self/task/[tid]/comm and /proc/self/comm name whether
  matches the thread name.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

prctl06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl06.c>`__

Test PR_GET_NO_NEW_PRIVS and PR_SET_NO_NEW_PRIVS of prctl(2).

- Return the value of the no_new_privs bit for the calling thread.
  A value of 0 indicates the regular execve(2) behavior.  A value of
  1 indicates execve(2) will operate in the privilege-restricting mode.

- With no_new_privs set to 1, diables privilege granting operations
  at execve-time. For example, a process will not be able to execute a
  setuid binary to change their uid or gid if this bit is set. The same
  is true for file capabilities.

- The setting of this bit is inherited by children created by fork(2),
  and preserved across execve(2). We also check NoNewPrivs field in
  /proc/self/status if it supports.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`resource_files <tst_test>`
     - prctl06_execve
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

prctl07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl07.c>`__

Test the PR_CAP_AMBIENT of prctl(2).

Reads or changes the ambient capability set of the calling thread,
according to the value of arg2, which must be one of the following:

- PR_CAP_AMBIENT_RAISE: The capability specified in arg3 is added to the
  ambient set. The specified capability must already be present in both pE
  and pI. If we set SECBIT_NO_CAP_AMBIENT_RAISE bit, raise option will be
  rejected and return EPERM. We also raise a CAP twice.

- PR_CAP_AMBIENT_LOWER: The capability specified in arg3 is removed from the
  ambient set. Even though this cap is not in set, it also should return 0.

- PR_CAP_AMBIENT_IS_SET: Returns 1 if the capability in arg3 is in the
  ambient set and 0 if it is not.

- PR_CAP_AMBIENT_CLEAR_ALL:  All capabilities will be removed from the
  ambient set. This operation requires setting arg3 to zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

prctl08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl08.c>`__

Test PR_GET_TIMERSLACK and PR_SET_TIMERSLACK of prctl(2).

- Each thread has two associated timer slack values: a "default"
  value, and a "current" value. PR_SET_TIMERSLACK sets the "current"
  timer slack value for the calling thread.

- When a new thread is created, the two timer slack values are made
  the same as the "current" value of the creating thread.

- The maximum timer slack value is ULONG_MAX. On 32bit machines, it
  is a valid value(about 4s). On 64bit machines, it is about 500 years
  and no person will set this over 4s.  prctl return value is int, so
  we test themaximum value is INT_MAX.

- we also check current value via /proc/self/timerslack_ns if it is
  supported.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

prctl09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl09.c>`__

This is a timer sample test that timer slack is 200us.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - prctl()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

prctl10
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/prctl/prctl10.c>`__

Basic test to test behaviour of PR_GET_TSC and PR_SET_TSC.

Set the state of the flag determining whether the timestamp counter can
be read by the process.

- Pass PR_TSC_ENABLE to arg2 to allow it to be read.
- Pass PR_TSC_SIGSEGV to arg2 to generate a SIGSEGV when read.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | x86_64


.. raw:: html

    <hr>

pread01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pread/pread01.c>`__

Verify the functionality of pread() by writing known data using pwrite()
to the file at various specified offsets and later read from the file from
various specified offsets, comparing the data read against the data written.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pread02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pread/pread02.c>`__

Tests basic error handling of the pread syscall.

- ESPIPE when attempted to read from an unnamed pipe
- EINVAL if the specified offset position was invalid
- EISDIR when fd refers to a directory

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv/preadv01.c>`__

Testcase to check the basic functionality of the preadv(2).

Preadv(2) should succeed to read the expected content of data
and after reading the file, the file offset is not changed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv/preadv02.c>`__

- EINVAL when iov_len is invalid.
- EINVAL when the vector count iovcnt is less than zero.
- EINVAL when offset is negative.
- EFAULT when attempts to read into a invalid address.
- EBADF when file descriptor is invalid.
- EBADF when file descriptor is not open for reading.
- EISDIR when fd refers to a directory.
- ESPIPE when fd is associated with a pipe.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv/preadv03.c>`__

Check the basic functionality of the preadv(2) for the file
opened with O_DIRECT in all filesystem.

preadv(2) should succeed to read the expected content of data
and after reading the file, the file offset is not changed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv201
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv2/preadv201.c>`__

Verify the basic functionality of the preadv2(2):

1. If the file offset argument is not -1, preadv2() should succeed
in reading the expected content of data and the file offset is not
changed after reading.
2. If the file offset argument is -1, preadv2() should succeed in
reading the expected content of data and the current file offset
is used and changed after reading.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv202
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv2/preadv202.c>`__

Verify that, preadv2(2) fails and sets errno to

1. EINVAL if iov_len is invalid.
2. EINVAL if the vector count iovcnt is less than zero.
3. EOPNOTSUPP if flag is invalid.
4. EFAULT when attempting to read into an invalid address.
5. EBADF if file descriptor is invalid.
6. EBADF if file descriptor is not open for reading.
7. EISDIR when fd refers to a directory.
8. ESPIPE if fd is associated with a pipe.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

preadv203
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/preadv2/preadv203.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

proc_sched_rt01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sched/sysctl/proc_sched_rt01.c>`__

Sanity tests for the /proc/sys/kernel/sched_r* files.

- The sched_rt_period_us range is 1 to INT_MAX
  try invalid values and check for EINVAL

- The sched_rt_runtime_us range is -1 to INT_MAX
  try invalid values and check for EINVAL

- The sched_rt_runtime_us must be less or equal to sched_rt_period_us

- Reset sched_rr_timeslice_ms to default value by writing -1 and check that
  we get the default value on next read.

This is a regression test for a commits:

 - c1fc6484e1fb ("sched/rt: sysctl_sched_rr_timeslice show default timeslice after reset")
 - 079be8fc6309 ("sched/rt: Disallow writing invalid values to sched_rt_period_us")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c1fc6484e1fb <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c1fc6484e1fb>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `079be8fc6309 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=079be8fc6309>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_SYSCTL


.. raw:: html

    <hr>

process_madvise01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/process_madvise/process_madvise01.c>`__

Allocate anonymous memory pages inside child and reclaim it with
MADV_PAGEOUT. Then check if memory pages have been swapped out by looking
at smaps information.

The advice might be ignored for some pages in the range when it is
not applicable, so test passes if swap memory increases after
reclaiming memory with MADV_PAGEOUT.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_SWAP=y
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`min_kver <tst_test>`
     - 5.10
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_mem_avail <tst_test>`
     - 2
   * -  :c:struct:`min_swap_avail <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

process_vm01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cma/process_vm01.c>`__

Test errno codes in process_vm_readv and process_vm_writev syscalls.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -r
     - Use process_vm_read instead of process_vm_write


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

process_vm_readv02
------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cma/process_vm_readv02.c>`__

Fork two children, one child allocates memory and initializes it;
then the other one calls process_vm_readv and reads from the same
memory location, it then verifies if process_vm_readv returns
correct data.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

process_vm_readv03
------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cma/process_vm_readv03.c>`__

Fork two children, one child mallocs randomly sized trunks of memory
and initializes them; the other child calls process_vm_readv with
the remote iovecs initialized to the original process memory
locations and the local iovecs initialized to randomly sized and
allocated local memory locations. The second child then verifies
that the data is copied correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

process_vm_writev02
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/cma/process_vm_writev02.c>`__

Fork two children, the first one allocates a chunk of memory and the
other one call process_vm_writev to write known data into the first
child. Then first child verifies that the data is as expected.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Total buffer size (default 100000)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pselect01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pselect/pselect01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - pselect()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn


.. raw:: html

    <hr>

pselect02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pselect/pselect02.c>`__

 Verify that pselect() fails with:

 - EBADF if a file descriptor that was already closed
 - EINVAL if nfds was negative
 - EINVAL if the value contained within timeout was invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pselect03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pselect/pselect03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pt_test
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/tracing/pt_test/pt_test.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Different mode, default is full mode
   * - -e
     - Exclude info, user or kernel
   * - -b
     - Disable branch trace


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.1


.. raw:: html

    <hr>

ptem01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem01.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, obtain a
slave device and configure termos/termios ioctls.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptem02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem02.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, obtain a
slave device and set/get window size.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptem03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem03.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, obtain a
slave device and to send a break to both master and slave.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptem04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem04.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, obtain a
slave device and to check if it's possible to open it multiple times.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptem05
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem05.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, to obtain
a master + slave pair and to open them multiple times.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptem06
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/ptem06.c>`__

Verify that it's possible to open a pseudo-terminal via /dev/ptmx, to obtain
a slave device and to set baudrate to B0 (which means hang up).

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptrace01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptrace02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

ptrace03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptrace05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace05.c>`__

This test ptraces itself as per arbitrarily specified signals,
over 0 to SIGRTMAX range.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptrace06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace06.c>`__

Check out-of-bound/unaligned addresses given to

 - {PEEK,POKE}{DATA,TEXT,USER}
 - {GET,SET}{,FG}REGS
 - {GET,SET}SIGINFO

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

ptrace07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `814fb7bb7db5 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=814fb7bb7db5>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-15537 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15537>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - x86_64
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ptrace08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace08.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f67b15037a7a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f67b15037a7a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-1000199 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000199>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `27747f8bc355 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=27747f8bc355>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | x86_64
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

ptrace09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace09.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d8ba61ba58c8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d8ba61ba58c8>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-8897 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-8897>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | x86_64


.. raw:: html

    <hr>

ptrace10
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace10.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `bd14406b78e6 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bd14406b78e6>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | x86_64


.. raw:: html

    <hr>

ptrace11
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ptrace/ptrace11.c>`__

Before kernel 2.6.26 we could not trace init(1) process and ptrace() would
fail with EPERM. This case just checks whether we can trace init(1) process
successfully.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pty01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty01.c>`__

Verify that write/read is properly working when master and slave
pseudo terminals communicate with each other.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pty02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `966031f34018 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=966031f34018>`_




.. raw:: html

    <hr>

pty03
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty03.c>`__

Test based on Syzkaller reproducer:
https://syzkaller.appspot.com/bug?id=680c24ff647dd7241998e19da52e8136d2fd3523

The SLIP and SLCAN disciplines can have a race between write_wakeup and
close/hangup. This at least allows the netdev private data (tty->disc_data)
to be set to NULL or possibly freed while a transmit operation is being
added to a workqueue.

If the race condition exists, then the most likely result of running this
is a null pointer dereference.

Note that we must set the line discipline to "mouse" first which, for
whatever reason, results in tty_wakeup being called during the close
operation.

We also test a selection of other line disciplines, but only SLIP and SLCAN
are known to have the problem.

Fixed by commit from v5.5:
0ace17d56824 ("can, slip: Protect tty->disc_data in write_wakeup and close with RCU")

This is also regression test for commit from v4.5-rc1:
dd42bf119714 ("tty: Prevent ldisc drivers from re-using stale tty fields")

Test timeout defaults is 30 seconds.
Maximum runtime is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `0ace17d568241 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=0ace17d568241>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2020-14416 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-14416>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `dd42bf1197144 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=dd42bf1197144>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_SERIO_SERPORT
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

pty04
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b9258a2cece4ec1f020715fe3554bc2e360f6264 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b9258a2cece4ec1f020715fe3554bc2e360f6264>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2020-11494 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2020-11494>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pty05
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty05.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `82f2341c94d27 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=82f2341c94d27>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-2636 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-2636>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

pty06
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty06.c>`__

Test based on Syzkaller reproducer:
https://syzkaller.appspot.com/bug?extid=522643ab5729b0421998

The VT_DISALLOCATE ioctl can free a virtual console while tty_release() is
still running, causing a use-after-free in con_shutdown(). This occurs
because VT_DISALLOCATE only considers a virtual console to be in-use if it
has a tty_struct with count > 0. But actually when count == 0, the tty is
still in the process of being closed.

Fixed by commit:

 commit ca4463bf8438b403596edd0ec961ca0d4fbe0220
 Author: Eric Biggers <ebiggers@google.com>
 Date:   Sat Mar 21 20:43:04 2020 -0700

   vt: vt_ioctl: fix VT_DISALLOCATE freeing in-use virtual console

Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2020-36557 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-36557>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `ca4463bf8438 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ca4463bf8438>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

pty07
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty07.c>`__

The VT_DISALLOCATE ioctl can free a virtual console while VT_RESIZEX ioctl is
still running, causing a use-after-free in vt_ioctl(). Because VT_RESIZEX ioctl
have not make sure vc_cons[i].d is not NULL after grabbing console_lock().

Fixed by commit:

 commit 6cd1ed50efd88261298577cd92a14f2768eddeeb
 Author: Eric Dumazet <edumazet@google.com>
 Date:   Mon Feb 10 11:07:21 2020 -0800

   vt: vt_ioctl: fix race in VT_RESIZEX

Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `6cd1ed50efd8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6cd1ed50efd8>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

pty08
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty08.c>`__

Verify that slave pseudo-terminal fails reading/writing if master has been
closed.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pty09
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/pty/pty09.c>`__

Verify that slave pseudo-terminal can be opened multiple times in parallel.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

pwrite01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwrite/pwrite01.c>`__

Verify the functionality of pwrite() by writing known data using pwrite()
to the file at various specified offsets and later read from the file from
various specified offsets, comparing the data written aganist the data
read using read().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwrite02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwrite/pwrite02.c>`__

Test basic error handling of the pwrite syscall.

- ESPIPE when attempted to write to an unnamed pipe
- EINVAL the specified offset position was invalid
- EBADF fd is not a valid file descriptor
- EBADF fd is not open for writing
- EFAULT when attempted to write with buf outside accessible address space

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwrite03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwrite/pwrite03.c>`__

Tests for a special case NULL buffer with size 0 is expected to return 0.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwrite04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwrite/pwrite04.c>`__

Test the pwrite() system call with O_APPEND.

Writing 2k data to the file, close it and reopen it with O_APPEND.

POSIX requires that opening a file with the O_APPEND flag should have no effect on the
location at which pwrite() writes data. However, on Linux, if a file is opened with
O_APPEND, pwrite() appends data to the end of the file, regardless of the value of offset.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwritev01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwritev/pwritev01.c>`__

Testcase to check the basic functionality of the pwritev(2).

pwritev(2) should succeed to write the expected content of data
and after writing the file, the file offset is not changed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwritev02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwritev/pwritev02.c>`__

- EINVAL when iov_len is invalid.
- EINVAL when the vector count iovcnt is less than zero.
- EINVAL when offset is negative.
- EFAULT when attempts to write from a invalid address
- EBADF when file descriptor is invalid.
- EBADF when file descriptor is not open for writing.
- ESPIPE when fd is associated with a pipe.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwritev03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwritev/pwritev03.c>`__

Check the basic functionality of the pwritev(2) for the file
opened with O_DIRECT in all filesystem.

pwritev(2) should succeed to write the expected content of data
and after writing the file, the file offset is not changed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwritev201
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwritev2/pwritev201.c>`__

Testcase to check the basic functionality of the pwritev2(2).

- If the file offset argument is not -1, pwritev2() should succeed
  in writing the expected content of data and the file offset is
  not changed after writing.
- If the file offset argument is -1, pwritev2() should succeed in
  writing the expected content of data and the current file offset
  is used and changed after writing.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

pwritev202
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/pwritev2/pwritev202.c>`__

Check various errnos for pwritev2(2).

- pwritev2() fails and sets errno to EINVAL if iov_len is invalid.
- pwritev2() fails and sets errno to EINVAL if the vector count iovcnt is
   less than zero.
- pwritev2() fails and sets errno to EOPNOTSUPP if flag is invalid.
- pwritev2() fails and sets errno to EFAULT when writing data from invalid
   address.
- pwritev2() fails and sets errno to EBADF if file descriptor is invalid.
- pwritev2() fails and sets errno to EBADF if file descriptor is open for
  reading.
- pwritev2() fails and sets errno to ESPIPE if fd is associated with a pipe.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl01.c>`__

This testcases checks that quotactl(2) on ext4 filesystem succeeds to:

- turn on quota with Q_QUOTAON flag for user
- set disk quota limits with Q_SETQUOTA flag for user
- get disk quota limits with Q_GETQUOTA flag for user
- set information about quotafile with Q_SETINFO flag for user
- get information about quotafile with Q_GETINFO flag for user
- get quota format with Q_GETFMT flag for user
- update quota usages with Q_SYNC flag for user
- get disk quota limit greater than or equal to ID with Q_GETNEXTQUOTA flag for user
- turn off quota with Q_QUOTAOFF flag for user
- turn on quota with Q_QUOTAON flag for group
- set disk quota limits with Q_SETQUOTA flag for group
- get disk quota limits with Q_GETQUOTA flag for group
- set information about quotafile with Q_SETINFO flag for group
- get information about quotafile with Q_GETINFO flag for group
- get quota format with Q_GETFMT flag for group
- update quota usages with Q_SYNC flag for group
- get disk quota limit greater than or equal to ID with Q_GETNEXTQUOTA flag for group
- turn off quota with Q_QUOTAOFF flag for group

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - quota_v2
   * -  :c:struct:`needs_cmds <tst_test>`
     - quotacheck
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl02.c>`__

This testcases checks that quotactl(2) on xfs filesystem succeeds to:

- turn off xfs quota and get xfs quota off status for user
- turn on xfs quota and get xfs quota on status for user
- set and use Q_XGETQUOTA to get xfs disk quota limits for user
- set and use Q_XGETNEXTQUOTA to get xfs disk quota limits greater than or
  equal to ID for user
- turn off xfs quota and get xfs quota off statv for user
- turn on xfs quota and get xfs quota on statv for user
- turn off xfs quota and get xfs quota off status for group
- turn on xfs quota and get xfs quota on status for group
- set and use Q_XGETQUOTA to get xfs disk quota limits for group
- set and use Q_XGETNEXTQUOTA to get xfs disk quota limits for group
- turn off xfs quota and get xfs quota off statv for group
- turn on xfs quota and get xfs quota on statv for gorup

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_XFS_QUOTA
   * -  :c:struct:`filesystems <tst_test>`
     - xfs
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl03.c>`__

quotactl(2) with XGETNEXTQUOTA looks for the next active quota for an user
equal or higher to a given ID, in this test the ID is specified to a value
close to UINT_MAX(max value of unsigned int). When reaching the upper limit
and finding no active quota, it should return -1 and set errno to ENOENT.
Actually, quotactl(2) overflows and and return 0 as the "next" active id.

This kernel bug of xfs has been fixed in:

 commit 657bdfb7f5e68ca5e2ed009ab473c429b0d6af85
 Author: Eric Sandeen <sandeen@redhat.com>
 Date:   Tue Jan 17 11:43:38 2017 -0800

 xfs: don't wrap ID in xfs_dq_get_next_id

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `657bdfb7f5e6 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=657bdfb7f5e6>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`filesystems <tst_test>`
     - xfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_XFS_QUOTA
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl04.c>`__

This testcase checks that quotactl(2) on ext4 filesystem succeeds to:

- turn on quota with Q_QUOTAON flag for project
- set disk quota limits with Q_SETQUOTA flag for project
- get disk quota limits with Q_GETQUOTA flag for project
- set information about quotafile with Q_SETINFO flag for project
- get information about quotafile with Q_GETINFO flag for project
- get quota format with Q_GETFMT flag for project
- get disk quota limit greater than or equal to ID with Q_GETNEXTQUOTA flag for project
- turn off quota with Q_QUOTAOFF flag for project

Minimum e2fsprogs version required is 1.43.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - quota_v2
   * -  :c:struct:`min_kver <tst_test>`
     - 4.5
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`needs_cmds <tst_test>`
     - mkfs.ext4 >= 1.43.0
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl05.c>`__

This testcases checks that quotactl(2) on xfs filesystem succeeds to:

- turn off xfs quota and get xfs quota off status for project
- turn on xfs quota and get xfs quota on status for project
- set and use Q_XGETQUOTA to get xfs disk quota limits for project
- set and use Q_XGETNEXTQUOTA to get xfs disk quota limits greater than or
  equal to ID for project
- turn off xfs quota and get xfs quota off statv for project
- turn on xfs quota and get xfs quota on statvfor project

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_XFS_QUOTA
   * -  :c:struct:`filesystems <tst_test>`
     - xfs
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl06.c>`__

Tests basic error handling of the quotactl syscall with visible quota files
(cover two formats, vfsv0 and vfsv1):

- EACCES when cmd is Q_QUOTAON and addr existed but not a regular file
- ENOENT when the file specified by special or addr does not exist
- EBUSY when cmd is Q_QUOTAON and another Q_QUOTAON had already been
  performed
- EFAULT when addr or special is invalid
- EINVAL when cmd or type is invalid
- ENOTBLK when special is not a block device
- ESRCH when no disk quota is found for the indicated user and quotas have
  not been turned on for this fs
- ESRCH when cmd is Q_QUOTAON, but the quota format was not found
- ESRCH when cmd is Q_GETNEXTQUOTA, but there is no ID greater than or
  equal to id that has an active quota
- ERANGE when cmd is Q_SETQUOTA, but the specified limits are out of the
  range allowed by the quota format
- EPERM when the caller lacked the required privilege (CAP_SYS_ADMIN) for
  the specified operation

For ERANGE error, the vfsv0 and vfsv1 format's maximum quota limit setting
have been fixed since the following kernel patch:

 commit 7e08da50cf706151f324349f9235ebd311226997
 Author: Jan Kara <jack@suse.cz>
 Date:   Wed Mar 4 14:42:02 2015 +0100

 quota: Fix maximum quota limit settings

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `7e08da50cf70 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=7e08da50cf70>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - quota_v2
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - quotacheck
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl07.c>`__

This is not only a functional test but also a error test for Q_XQUOTARM.

It is a regresstion test for kernel commit 3dd4d40b4208
("xfs: Sanity check flags of Q_XQUOTARM call").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `3dd4d40b4208 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3dd4d40b4208>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`filesystems <tst_test>`
     - xfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_XFS_QUOTA
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl08
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl08.c>`__

This testcases checks that quotactl(2) on ext4 filesystem succeeds to:

- turn on quota with Q_QUOTAON flag for user
- set disk quota limits with Q_SETQUOTA flag for user
- get disk quota limits with Q_GETQUOTA flag for user
- set information about quotafile with Q_SETINFO flag for user
- get information about quotafile with Q_GETINFO flag for user
- get quota format with Q_GETFMT flag for user
- update quota usages with Q_SYNC flag for user
- get disk quota limit greater than or equal to ID with Q_GETNEXTQUOTA flag for user
- turn off quota with Q_QUOTAOFF flag for user
- turn on quota with Q_QUOTAON flag for group
- set disk quota limits with Q_SETQUOTA flag for group
- get disk quota limits with Q_GETQUOTA flag for group
- set information about quotafile with Q_SETINFO flag for group
- get information about quotafile with Q_GETINFO flag for group
- get quota format with Q_GETFMT flag for group
- update quota usages with Q_SYNC flag for group
- get disk quota limit greater than or equal to ID with Q_GETNEXTQUOTA flag for group
- turn off quota with Q_QUOTAOFF flag for group

It is similar to quotactl01.c, only two difference

- use new quotactl_fd syscalls if supports
- quota file hidden in filesystem

Minimum e2fsprogs version required is 1.43.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - quota_v2
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - mkfs.ext4 >= 1.43.0
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

quotactl09
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/quotactl/quotactl09.c>`__

Tests basic error handling of the quotactl syscall without visible quota files
(use quotactl and quotactl_fd syscall):

- EFAULT when addr or special is invalid
- EINVAL when cmd or type is invalid
- ENOTBLK when special is not a block device
- ERANGE when cmd is Q_SETQUOTA, but the specified limits are out of the range
  allowed by the quota format
- EPERM when the caller lacked the required privilege (CAP_SYS_ADMIN) for the
  specified operation
- ENOSYS when cmd is Q_QUOTAON, but the fd refers to a socket

Minimum e2fsprogs version required is 1.43.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cmds <tst_test>`
     - mkfs.ext4 >= 1.43.0
   * -  :c:struct:`needs_drivers <tst_test>`
     - quota_v2
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

read01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/read/read01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

read02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/read/read02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

read03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/read/read03.c>`__

Testcase to check if read() successfully sets errno to EAGAIN when read from
a pipe (fifo, opened in O_NONBLOCK mode) without writing to it.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

read04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/read/read04.c>`__

Testcase to check if read() returns the number of bytes read correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

read_all
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/read_all/read_all.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 100 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -v
     - Print information about successful reads.
   * - -q
     - Don't print file read or open errors.
   * - -d
     - Path to the directory to read from, defaults to /sys.
   * - -e
     - Pattern Ignore files which match an 'extended' pattern, see fnmatch(3).
   * - -r
     - Count The number of times to schedule a file for reading.
   * - -w
     - Count Set the worker count limit, the default is 15.
   * - -W
     - Count Override the worker count. Ignores (-w) and the processor count.
   * - -p
     - Drop privileges; switch to the nobody user.
   * - -t
     - Milliseconds a worker has to read a file before it is restarted




.. raw:: html

    <hr>

readahead01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readahead/readahead01.c>`__

Verify that readahead() syscall fails with:

- EBADF when fd is not a valid file descriptor or is not open for reading.
- EINVAL when fd does not refer to a file type to which readahead()
  can be applied.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readahead02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readahead/readahead02.c>`__


Test timeout is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Testfile size (default 64MB)


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b833a3660394 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b833a3660394>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `5b910bd615ba <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5b910bd615ba>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readdir01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readdir/readdir01.c>`__

The test for the readdir(2) system call.
Create n files and check that readdir() finds n files

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readdir21
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readdir/readdir21.c>`__

Verify that readdir will fail with:

- ENOENT when passed a fd to a deleted directory
- ENOTDIR when passed fd that does not point to a directory
- EBADFD when passed an invalid fd
- EFAULT when passed invalid buffer pointer

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readlink01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readlink/readlink01.c>`__

Tests basic functionality of readlink(2).

- readlink() will succeed to read the contents of the symbolic link

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readlink03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readlink/readlink03.c>`__

Verify that, readlink(2) returns -1 and sets errno to

1. EACCES if search/write permission is denied in the directory where the
symbolic link esides.
2. EINVAL if the buffer size is not positive.
3. EINVAL if the specified file is not a symbolic link file.
4. ENAMETOOLONG if the pathname component of symbolic link is too long
(ie, > PATH_MAX).
5. ENOENT if the component of symbolic link points to an empty string.
6. ENOTDIR if a component of the path prefix is not a directory.
7. ELOOP if too many symbolic links were encountered in translating the
pathname.
8. EFAULT if buf outside the process allocated address space.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readlinkat01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readlinkat/readlinkat01.c>`__

Check the basic functionality of the readlinkat() system call.

- readlinkat() passes if dirfd is directory file descriptor
  and the pathname is relative.
- readlinkat() passes if the pathname is abspath, then dirfd
  is ignored.
- readlinkat() passes if dirfd is the special value AT_FDCWD
  and the pathname is relative.
- readlinkat() passes if pathname is an empty string, in which
  case the call operates on the symbolic link referred to by dirfd.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readlinkat02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readlinkat/readlinkat02.c>`__

- readlinkat() fails with EINVAL if the bufsiz is 0.

- readlinkat() fails with EINVAL if the named file is not a symbolic link.

- readlinkat() fails with ENOTDIR if the component of the path prefix is
  not a directory.

- readlinkat() fails with ENOTDIR if the pathname is relative and
  dirfd is a file descriptor referring to a file other than a directory.

- readlinkat() fails with EBADF if the file descriptor is invalid.

- readlinkat() fails with ENOENT when the pathname does not exists.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readv01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readv/readv01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `19f18459330f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=19f18459330f>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

readv02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/readv/readv02.c>`__

Tests readv() failures:

- EINVAL the sum of the iov_len values overflows an ssize_t value
- EFAULT buffer is outside the accessible address space
- EINVAL the vector count iovcnt is less than zero
- EISDIR the file descriptor is a directory
- EBADF  the file descriptor is not valid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

realpath01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/realpath/realpath01.c>`__

CVE-2018-1000001 realpath buffer underflow.

Based on glibc test io/tst-getcwd-abspath.c:
https://sourceware.org/git/?p=glibc.git;a=commit;h=52a713fdd0a30e1bd79818e2e3c4ab44ddca1a94.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2018-1000001 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-1000001>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

reboot01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/reboot/reboot01.c>`__

Basic test of libc wrapper of reboot(2) system call.

Test LINUX_REBOOT_CMD_CAD_ON, LINUX_REBOOT_CMD_CAD_OFF commands,
which do not perform reboot.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

reboot02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/reboot/reboot02.c>`__

Test whether libc wrapper of reboot(2) system call returns appropriate
error number for invalid cmd parameter or invalid user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

recvmmsg01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/recvmmsg/recvmmsg01.c>`__

Test recvmmsg() errors:

- EBADF  Bad socket file descriptor
- EFAULT Bad message vector address
- EINVAL Bad seconds value for the timeout argument
- EINVAL Bad nanoseconds value for the timeout argument
- EFAULT Bad timeout address

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

recvmsg01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/recvmsg/recvmsg01.c>`__

Verify that recvmsg() returns the proper errno for various failure cases.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

recvmsg02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/recvmsg/recvmsg02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `197c949e7798 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=197c949e7798>`_




.. raw:: html

    <hr>

recvmsg03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/recvmsg/recvmsg03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `06b6a1cf6e77 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=06b6a1cf6e77>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

remap_file_pages02
------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/remap_file_pages/remap_file_pages02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename01.c>`__

Verify rename() when the newpath file or directory does not exist.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename03.c>`__

Verify rename(2) functions correctly when the newpath
file or directory (empty) exists.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename04.c>`__

Verify that rename() fails with EEXIST or ENOTEMPTY when
newpath is a non-empty directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename05.c>`__

Verify that rename(2) fails with EISDIR when
oldpath is not a directory and newpath is an existing directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename06.c>`__

Verify that rename(2) fails with EINVAL when
an attempt is made to make a directory a subdirectory of itself.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename07.c>`__

Verify that rename(2) fails with ENOTDIR, when
oldpath is a directory and newpath exists but is not a directory.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename08.c>`__

Verify that rename(2) fails with EFAULT, when
oldpath or newpath points outside of accessible address space.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename09.c>`__

Check that renaming/moving a file from directory where the current user does
not have write permissions fails with EACCES.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

rename10
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename10.c>`__

Verify that rename(2) fails with ENAMETOOLONG, when
oldpath or newpath is too long.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename12
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename12.c>`__

Verify that rename() fails with EPERM or EACCES when the directory
containing oldpath has the sticky bit (S_ISVTX) set and the caller
is not privileged.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
       | fuse
       | ntfs
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename13
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename13.c>`__

Verify that rename() does nothing and returns a success status when
oldpath and newpath are existing hard links referring to the same file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | exfat
       | vfat
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rename15
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rename/rename15.c>`__

This test suite validates the behavior of the `rename()` system call on
symbolic links under three scenarios:

- rename a symlink pointing to an existing file and verifies that the
  symlink's inode and device number remain unchanged.

- rename a symlink pointing to a non-existent path, ensuring that the
  original symlink remains unaffected.

- rename a symlink pointing to a created file, confirming that the new
  symlink points to the correct file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

request_key01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key01.c>`__

Test basic functionality of the request_key(2).

request_key(2) asks the kernel to find a key which matches the
specified description. If successful, it attaches it to the
nominated keyring and returns its serial number.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

request_key02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key02.c>`__

Basic request_key(2) failure checking. request_key(2) should return -1 and
set expected errno:

1. ENOKEY (no matching key was found),
2. EKEYREVOKED (revoked key was found)
3. EKEYEXPIRED (expired key was found)

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

request_key03
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key03.c>`__

Regression test for two related bugs:

1. CVE-2017-15299, fixed by commit 60ff5b2f547a ("KEYS: don't let add_key()
   update an uninstantiated key")
2. CVE-2017-15951, fixed by commit 363b02dab09b ("KEYS: Fix race between
   updating and finding a negative key")

We test for the bugs together because the reproduction steps are essentially
the same: repeatedly try to add/update a key with add_key() while requesting
it with request_key() in another task.  This reproduces both bugs:

For CVE-2017-15299, add_key() has to run while the key being created by
request_key() is still in the "uninstantiated" state.  For the "encrypted" or
"trusted" key types (not guaranteed to be available) this caused a NULL
pointer dereference in encrypted_update() or in trusted_update(),
respectively.  For the "user" key type, this caused the WARN_ON() in
construct_key() to be hit.

For CVE-2017-15951, request_key() has to run while the key is "negatively
instantiated" (from a prior request_key()) and is being concurrently changed
to "positively instantiated" via add_key() updating it.  This race, which is
a bit more difficult to reproduce, caused the task executing request_key() to
dereference an invalid pointer in __key_link_begin().

Test timeout defaults is 30 seconds.
Maximum runtime is 20 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -b
     - Bug to test for (cve-2017-15299 or cve-2017-15951; default is both)


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-15299 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15299>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `60ff5b2f547a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=60ff5b2f547a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-15951 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-15951>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `363b02dab09b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=363b02dab09b>`_




.. raw:: html

    <hr>

request_key04
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key04.c>`__

Regression test for commit 4dca6ea1d943 ("KEYS: add missing permission check
for request_key() destination"), or CVE-2017-17807.  This bug allowed adding
a key to a keyring given only Search permission to that keyring, rather than
the expected Write permission.

We test for the bug by trying to add a negatively instantiated key, since
adding a negatively instantiated key using the bug was easy whereas adding a
positively instantiated key required exploiting a race condition.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17807 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17807>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `4dca6ea1d943 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=4dca6ea1d943>`_




.. raw:: html

    <hr>

request_key05
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key05.c>`__

Test for CVE-2017-6951, original reproducer:
http://www.spinics.net/lists/keyrings/msg01845.html

request_key() is not in glibc, so we just use the syscall directly instead
of linking to keyutils.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-6951 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-6951>`_




.. raw:: html

    <hr>

request_key06
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/request_key/request_key06.c>`__

Verify that request_key(2) fails with

- EFAULT when type points outside the process's accessible address space
- EFAULT when description points outside the process's accessible address space
- EFAULT when callout_info points outside the process's accessible address space
- EPERM when type argument started with a period '.'

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

rmdir01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rmdir/rmdir01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rmdir02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rmdir/rmdir02.c>`__

Verify that, rmdir(2) returns -1 and sets errno to

1. ENOTEMPTY when removing a non-empty directory
2. ENAMETOOLONG when removing a directory with long path name
3. ENOENT when removing a non-existing directory
4. ENOTDIR when removing a a file
5. EFAULT when removing a invalid pointer
6. ELOOP when removing a symlink loop
7. EROFS when removing a dir on RO mounted FS
8. EBUSY when removing a mount point
9. EINVAL when removing "." (current directory)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

rmdir03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rmdir/rmdir03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

route-change-netlink
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/stress/route/route-change-netlink.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -6
     - Use IPv6 (default is IPv4)
   * - -c
     - Num loops (mandatory)
   * - -d
     - Interface to work on (mandatory)
   * - -g
     - Gateway IP
   * - -p
     - Rhost port (mandatory)
   * - -r
     - Rhost IP (mandatory)\n\n-g, -r IP parameter can contain more IP, separated by TST_TO_STR(',')


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

rt_sigqueueinfo01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rt_sigqueueinfo/rt_sigqueueinfo01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rt_sigqueueinfo02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rt_sigqueueinfo/rt_sigqueueinfo02.c>`__

Verify that, rt_sigqueueinfo(2) sets errno to

- EINVAL if sig is invalid
- EPERM if uinfo->si_code is invalid
- ESRCH if no thread group matching tgid is found

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rt_sigsuspend01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rt_sigsuspend/rt_sigsuspend01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

rt_sigtimedwait01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rt_sigtimedwait/rt_sigtimedwait01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

rt_tgsigqueueinfo01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/rt_tgsigqueueinfo/rt_tgsigqueueinfo01.c>`__

Basic test for rt_tgsigqueueinfo(2) syscall. It sends the signal and data
to the single thread specified by the combination of tgid, a thread group
ID, and tid, a thread in that thread group.

Also this implement 3 tests differing on the basis of signal sender:

- Sender and receiver is the same thread.
- Sender is parent of the thread.
- Sender is different thread.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

rtc02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/device-drivers/rtc/rtc02.c>`__

RTC device set time function test.

**Algorithm**

- Save RTC time
- Set RTC time
- Read the RTC time back
- Check if the set time and the read time are identical
- Restore RTC time

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sbrk01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sbrk/sbrk01.c>`__

Verify that sbrk() successfully increments or decrements the program's
data break.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sbrk02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sbrk/sbrk02.c>`__

Verify that sbrk() on failure sets errno to ENOMEM.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sbrk03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sbrk/sbrk03.c>`__

Total s390 2^31 addr space is 0x80000000.

0x80000000 - 0x10000000 = 0x70000000

0x70000000 is a valid positive intptr_t and adding it to the current offset
produces a valid uintptr_t without overflow (since the MSB being set is OK),
but that is irrelevant for s390 since it has 31-bit pointers and not 32-bit
pointers. Consequently, the brk syscall behaves incorrectly with the invalid
address and changes the program break to the overflowed address. The glibc
part of the implementation detects this overflow and returns a failure with
ENOMEM, but does not reset the program break.

So the bug is in sbrk as well as the brk syscall. brk() should validate the
address being passed and return an error. sbrk() should not result in a brk
call at all for an invalid address. One could argue in favour of fixing brk
in glibc, but it should be the kernel since one could call the syscall
directly without using the glibc entry points.

The kernel part was fixed on v3.15 by commit:
473a06572fcd ("s390/compat: convert system call wrappers to C part 02")

NOTE: The reproducer should be built in 32bit (gcc -m31) on s390 platform.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `473a06572fcd <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=473a06572fcd>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - s390
   * -  :c:struct:`needs_abi_bits <tst_test>`
     - 32


.. raw:: html

    <hr>

sched_football
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/realtime/func/sched_football/sched_football.c>`__

Scheduler test that uses a football analogy.

The premise is that we want to make sure that lower priority threads
don't run while we have runnable higher priority threads.
The offense is trying to increment the balls position, while the
defense is trying to block that from happening.
And the ref (highest priority thread) will blow the wistle if the
ball moves. Finally, we have crazy fans (higer prority) that try to
distract the defense by occasionally running onto the field.

**Algorithm**

- Create NR_CPU offense threads (lower priority).
- Create NR_CPU defense threads (mid priority).
- Create 2*NR_CPU fan threads (high priority).
- Create a referee thread (highest priority).
- Once everyone is on the field, the offense thread spins incrementing
  the value of 'the_ball'. The defense thread tries to block 'the_ball'
  by never letting the offense players get the CPU (it just spins).
  The crazy fans sleep a bit, then jump the rail and run across the
  field, disrupting the players on the field.
- The refree threads wakes up regularly to check if the game is over :).
- If the value of 'the_ball' is > 0, the test is considered to have failed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Game length in sec (default: TST_TO_STR(5) sec)
   * - -n
     - Number of players (default: number of CPU)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sched_get_priority_max01
------------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_get_priority_max/sched_get_priority_max01.c>`__

Basic test for the sched_get_priority_max(2) system call.

Obtain different maximum priority for different schedulling policies and
compare them with the expected value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sched_get_priority_max02
------------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_get_priority_max/sched_get_priority_max02.c>`__

Verify that given an invalid scheduling policy, sched_get_priority_max(2)
returns -1 with errno EINVAL.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sched_get_priority_min01
------------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_get_priority_min/sched_get_priority_min01.c>`__

Basic test for the sched_get_priority_min(2) system call.

Obtain different minimum priority for different schedulling policies and
compare them with the expected value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sched_get_priority_min02
------------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_get_priority_min/sched_get_priority_min02.c>`__

Verify that given an invalid scheduling policy, sched_get_priority_min(2)
returns -1 with errno EINVAL.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sched_getaffinity01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getaffinity/sched_getaffinity01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sched_getattr02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getattr/sched_getattr02.c>`__

Verify that, sched_getattr(2) returns -1 and sets errno to:

1. ESRCH if pid is unused.
2. EINVAL if address is NULL.
3. EINVAL if size is invalid.
4. EINVAL if flag is not zero.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sched_getparam01
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getparam/sched_getparam01.c>`__

Verify that:

sched_getparam(2) gets correct scheduling parameters for
the specified process:

- If pid is zero, sched_getparam(2) gets the scheduling parameters
  for the calling process.
- If pid is not zero, sched_getparam(2) gets the scheduling
  parameters for the specified [pid] process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_getparam03
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getparam/sched_getparam03.c>`__

Verify that:

- sched_getparam(2) returns -1 and sets errno to ESRCH if the
process with specified pid could not be found
- sched_getparam(2) returns -1 and sets errno to EINVAL if
the parameter pid is an invalid value (-1)
- sched_getparam(2) returns -1 and sets errno to EINVAL if the
parameter p is an invalid address

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_getscheduler01
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getscheduler/sched_getscheduler01.c>`__

Testcase to check sched_getscheduler() returns correct return value.

**Algorithm**

Call sched_setcheduler() to set the scheduling policy of the current
process. Then call sched_getscheduler() to ensure that this is same
as what set by the previous call to sched_setscheduler().

Use SCHED_RR, SCHED_FIFO, SCHED_OTHER as the scheduling policies for
sched_setscheduler().


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_getscheduler02
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_getscheduler/sched_getscheduler02.c>`__

Pass an unused pid to sched_getscheduler() and test for ESRCH.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_rr_get_interval01
-----------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_rr_get_interval/sched_rr_get_interval01.c>`__

Gets round-robin time quantum by calling sched_rr_get_interval() and
checks that the value is sane.

It is also a regression test for:

- 975e155ed873 (sched/rt: Show the 'sched_rr_timeslice' SCHED_RR timeslice tuning knob in milliseconds)
- c7fcb99877f9 ( sched/rt: Fix sysctl_sched_rr_timeslice intial value)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `975e155ed873 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=975e155ed873>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `c7fcb99877f9 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c7fcb99877f9>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sched_rr_get_interval02
-----------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_rr_get_interval/sched_rr_get_interval02.c>`__

Verify that for a process with scheduling policy SCHED_FIFO,
sched_rr_get_interval() writes zero into timespec structure
for tv_sec & tv_nsec.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

sched_rr_get_interval03
-----------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_rr_get_interval/sched_rr_get_interval03.c>`__

Verify that:

- sched_rr_get_interval() fails with errno set to EINVAL for an
  invalid pid

- sched_rr_get_interval() fails with errno set to ESRCH if the
  process with specified pid does not exists

- sched_rr_get_interval() fails with errno set to EFAULT if the
  address specified as &tp is invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

sched_setaffinity01
-------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setaffinity/sched_setaffinity01.c>`__

Check various errnos for sched_setaffinity():

1. EFAULT, if the supplied memory address is invalid.
2. EINVAL, if the mask doesn't contain at least one permitted cpu.
3. ESRCH, if the process whose id is pid could not be found.
4. EPERM, if the calling process doesn't have appropriate privileges.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sched_setparam01
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setparam/sched_setparam01.c>`__

Basic test for sched_setparam(2)

Call sched_setparam(2) with pid=0 so that it will
set the scheduling parameters for the calling process

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setparam02
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setparam/sched_setparam02.c>`__

Checks functionality for sched_setparam(2)

This test changes the scheduling priority for current process
and verifies it by calling sched_getparam().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setparam03
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setparam/sched_setparam03.c>`__

Checks functionality for sched_setparam(2) for pid != 0

This test forks a child and changes its parent's scheduling priority.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setparam04
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setparam/sched_setparam04.c>`__

Verify that:

1. sched_setparam(2) returns -1 and sets errno to ESRCH if the
   process with specified pid could not be found.
2. sched_setparam(2) returns -1 and sets errno to EINVAL if
   the parameter pid is an invalid value (-1).
3. sched_setparam(2) returns -1 and sets errno to EINVAL if the
   parameter p is an invalid address.
4. sched_setparam(2) returns -1 sets errno to EINVAL if the
   value for p.sched_priority is other than 0 for scheduling
   policy, SCHED_OTHER.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setparam05
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setparam/sched_setparam05.c>`__

Verify that sched_setparam() fails if the user does not have proper
privileges.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setscheduler01
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setscheduler/sched_setscheduler01.c>`__

Testcase to test whether sched_setscheduler(2) sets the errnos
correctly.

**Algorithm**

1. Call sched_setscheduler with an invalid pid, and expect
   ESRCH to be returned.
2. Call sched_setscheduler with an invalid scheduling policy,
   and expect EINVAL to be returned.
3. Call sched_setscheduler with an invalid "param" address,
   which lies outside the address space of the process, and expect
   EFAULT to be returned.
4. Call sched_setscheduler with an invalid priority value
   in "param" and expect EINVAL to be returned

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setscheduler02
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setscheduler/sched_setscheduler02.c>`__

Testcase to test whether sched_setscheduler(2) sets the errnos
correctly.

**Algorithm**

Call sched_setscheduler as a non-root uid, and expect EPERM
to be returned.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sched_setscheduler03
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setscheduler/sched_setscheduler03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sched_setscheduler04
--------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sched_setscheduler/sched_setscheduler04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_REQ,CAP_SYS_NICE)
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

sctp_big_chunk
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/sctp/sctp_big_chunk.c>`__

Regression test for the crash caused by over-sized SCTP chunk,
fixed by upstream commit 07f2c7ab6f8d ("sctp: verify size of a new
chunk in _sctp_make_chunk()").

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -a
     - Number of additional IP address params


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2018-5803 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-5803>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `07f2c7ab6f8d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=07f2c7ab6f8d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

seccomp01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/seccomp/seccomp01.c>`__

Test PR_GET_SECCOMP and PR_SET_SECCOMP with both prctl(2) and seccomp(2).
The second one is called via __NR_seccomp using tst_syscall().

- If PR_SET_SECCOMP sets the SECCOMP_MODE_STRICT for the calling thread,
  the only system call that the thread is permitted to make are read(2),
  write(2),_exit(2)(but not exit_group(2)), and sigreturn(2).  Other
  system calls result in the delivery of a SIGKILL signal. This operation
  is available only if the kernel is configured with CONFIG_SECCOMP enabled.

- If PR_SET_SECCOMP sets the SECCOMP_MODE_FILTER for the calling thread,
  the system calls allowed are defined by a pointer to a Berkeley Packet
  Filter. Other system calls result int the delivery of a SIGSYS signal
  with SECCOMP_RET_KILL. The SECCOMP_SET_MODE_FILTER operation is available
  only if the kernel is configured with CONFIG_SECCOMP_FILTER enabled.

- If SECCOMP_MODE_FILTER filters permit fork(2), then the seccomp mode
  is inherited by children created by fork(2).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

select01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/select/select01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 5


.. raw:: html

    <hr>

select02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/select/select02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`scall <tst_test>`
     - select()
   * -  :c:struct:`sample <tst_test>`
     - sample_fn
   * -  :c:struct:`test_variants <tst_test>`
     - 5


.. raw:: html

    <hr>

select03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/select/select03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 5


.. raw:: html

    <hr>

select04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/select/select04.c>`__

Test to check if fd set bits are cleared by select().

**Algorithm**
 - Check that writefds flag is cleared on full pipe
 - Check that readfds flag is cleared on empty pipe

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 5


.. raw:: html

    <hr>

sem_comm
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/sem_comm.c>`__

Test SysV IPC semaphore usage between cloned processes.

**Algorithm**

1. Clones two child processes with CLONE_NEWIPC flag, each child
   creates System V semaphore (sem) with the _identical_ key.
2. Child1 locks the semaphore.
3. Child2 locks the semaphore.
4. Locking the semaphore with the identical key but from two different
   IPC namespaces should not interfere with each other, so if child2
   is able to lock the semaphore (after child1 locked it), test passes,
   otherwise test fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sem_nstest
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/sem_nstest.c>`__

Test SysV IPC semaphore usage between namespaces.

**Algorithm**

In parent process create a new semaphore with a specific key.
In cloned process, try to access the created semaphore

Test PASS if the semaphore is readable when flag is None.
Test FAIL if the semaphore is readable when flag is Unshare or Clone.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare|none>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

semctl01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl01.c>`__

Test the 13 possible semctl() commands

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

semctl02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl02.c>`__

Test for semctl() EACCES error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

semctl03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl03.c>`__

Test for semctl() EINVAL and EFAULT errors

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

semctl04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl04.c>`__

Test for semctl() EPERM error

Runs IPC_SET and IPC_RMID from unprivileged child process.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

semctl05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl05.c>`__

Test for semctl() ERANGE error

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

semctl07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl07.c>`__

Basic tests for semctl().

- semctl() with IPC_STAT where we check the semid_ds buf content
- semctl() with SETVAL and GETVAL
- semctl() with GETPID
- semctl() with GETNCNT and GETZCNT

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

semctl08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl08.c>`__

Cross verify the _high fields being set to 0 by the kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

semctl09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semctl/semctl09.c>`__

Call semctl() with SEM_INFO flag and check that:

* The returned index points to a valid SEM by calling SEM_STAT_ANY
* Also count that valid indexes < returned max index sums up to semusz
* And the data are consistent with /proc/sysvipc/sem

There is a possible race between the call to the semctl() and read from the
proc file so this test cannot be run in parallel with any IPC testcases that
adds or removes semaphore set.

Note what we create a semaphore set in the test setup to make sure
that there is at least one during the testrun.

Also note that for SEM_INFO the members of the seminfo structure have
completely different meaning than their names seems to suggest.

We also calling semctl() directly by syscall(), because of a glibc bug:

semctl SEM_STAT_ANY fails to pass the buffer specified by the caller
to the kernel.

https://sourceware.org/bugzilla/show_bug.cgi?id=26637

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`glibc-git <tst_tag>`
     - `574500a108be <https://sourceware.org/git/?p=glibc.git;a=commit;h=574500a108be>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

semget01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semget/semget01.c>`__

This case checks that semget() correclty creates a semaphore set.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

semget02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semget/semget02.c>`__

This basic error handing of the semget syscall.

- EACCES - a semaphore set exists for key, but the calling process does not
  have permission to access the set
- EEXIST - a semaphore set already exists for key and IPC_CREAT | IPC_EXCL
  is given
- ENOENT - No semaphore set exists for key and semflg did not specify
  IPC_CREAT
- EINVAL - nsems is less than 0 or greater than the limit on the number of
  semaphores per semaphore set(SEMMSL)
- EINVAL - a semaphore set corresponding to key already exists, but nsems is
  larger than the number of semaphores in that set

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

semget05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semget/semget05.c>`__

Test for ENOSPC error.

ENOSPC - a semaphore set exceed the maximum number of semaphore sets(SEMMNI)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/sem


.. raw:: html

    <hr>

semop01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semop/semop01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

semop02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semop/semop02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

semop03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semop/semop03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

semop04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/semop/semop04.c>`__

Creates a semaphore and two processes.  The processes
each go through a loop where they semdown, delay for a
random amount of time, and semup, so they will almost
always be fighting for control of the semaphore.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

semtest_2ns
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/semtest_2ns.c>`__

Test SysV IPC semaphore usage between namespaces and processes.

**Algorithm**

Create 2 'containers'
In container1 create semaphore with a specific key and lock it
In container2 try to access the semaphore created in container1 and try to
unlock it.

If mode = None, test will PASS when semaphore created process1 can be read
and unlocked from process2.
If mode = Clone, test will PASS when semaphore created in container1 can't
be accessed from container2.
If mode = Unshare, test will PASS when semaphore created in container2 can't
be accessed from container2.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare|none>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

send02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/send/send02.c>`__

Check that the kernel correctly handles send()/sendto()/sendmsg() calls
with MSG_MORE flag.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sendfile02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile02.c>`__

Test the basic functionality of the sendfile() system call:

1. Call sendfile() with offset = 0.
2. Call sendfile() with offset in the middle of the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile03.c>`__

Testcase to test that sendfile(2) system call returns EBADF when passing
wrong out_fd or in_fd.

There are four cases:

- in_fd == -1
- out_fd = -1
- in_fd opened with O_WRONLY
- out_fd opened with O_RDONLY

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile04.c>`__

Testcase to test that sendfile(2) system call returns EFAULT when passing
wrong offset pointer.

**Algorithm**

Given wrong address or protected buffer as OFFSET argument to sendfile:

- a wrong address is created by munmap a buffer allocated by mmap
- a protected buffer is created by mmap with specifying protection

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile05.c>`__

Testcase to test that sendfile(2) system call returns EINVAL when passing
negative offset.

**Algorithm**

Call sendfile with offset = -1.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile06.c>`__

Test that sendfile() system call updates file position of in_fd correctly
when passing NULL as offset.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile07.c>`__

Testcase to test that sendfile(2) system call returns EAGAIN
when passing full out_fd opened with O_NONBLOCK.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile08
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile08.c>`__

Bug in the splice code has caused the file position on the write side
of the sendfile system call to be incorrectly set to the read side file
position. This can result in the data being written to an incorrect offset.

This is a regression test for kernel commit 2cb4b05e76478.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `2cb4b05e76478 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2cb4b05e76478>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sendfile09
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendfile/sendfile09.c>`__

Testcase copied from sendfile02.c to test the basic functionality of
the sendfile() system call on large file. There is a kernel bug which
introduced by commit 8f9c0119d7ba9 and fixed by commit 5d73320a96fcc.

Only supports 64bit systems.

**Algorithm**

1. Call sendfile() with offset at 0.
2. Call sendfile() with offset at 3GB.

Test timeout is 120 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `5d73320a96fcc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5d73320a96fcc>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1


.. raw:: html

    <hr>

sendmmsg01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendmmsg/sendmmsg01.c>`__

Basic sendmmsg() test that sends and receives messages.

This test is based on source contained in the man pages for sendmmsg and
recvmmsg in release 4.15 of the Linux man-pages project.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

sendmmsg02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendmmsg/sendmmsg02.c>`__

Tests sendmmsg() failures:

- EBADF Bad socket file descriptor
- EFAULT Bad message vector address

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 4


.. raw:: html

    <hr>

sendmsg03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendmsg/sendmsg03.c>`__

CVE-2017-17712

Test for race condition vulnerability in sendmsg() on SOCK_RAW sockets.
Changing the value of IP_HDRINCL socket option in parallel with sendmsg()
call may lead to uninitialized stack pointer usage, allowing arbitrary code
execution or privilege escalation.

Fixed in 4.15
8f659a03a0ba ("net: ipv4: fix for a race condition in raw_sendmsg")

Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8f659a03a0ba <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8f659a03a0ba>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-17712 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-17712>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

sendto02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendto/sendto02.c>`__

When SCTP protocol created wih socket(2) and buffer is invalid,
sendto(2) should fail and set errno to EFAULT, but it sets errno
to ENOMEM.

This is a regression test fixed by kernel 3.7
6e51fe757259 (sctp: fix -ENOMEM result with invalid user space pointer in sendto() syscall)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `6e51fe757259 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6e51fe757259>`_




.. raw:: html

    <hr>

sendto03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sendto/sendto03.c>`__

CVE-2020-14386

Check for vulnerability in tpacket_rcv() which allows an unprivileged user
to write arbitrary data to a memory area outside the allocated packet
buffer.

Kernel crash fixed in 5.9
acf69c946233 ("net/packet: fix overflow in tpacket_rcv")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `bcc5364bdcfe <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=bcc5364bdcfe>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `acf69c946233 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=acf69c946233>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2020-14386 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-14386>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

set_mempolicy01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_mempolicy/set_mempolicy01.c>`__


Test timeout is 600 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

set_mempolicy02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_mempolicy/set_mempolicy02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

set_mempolicy03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_mempolicy/set_mempolicy03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

set_mempolicy04
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_mempolicy/set_mempolicy04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

set_mempolicy05
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_mempolicy/set_mempolicy05.c>`__


This will reproduce an information leak in the set_mempolicy 32-bit
compat syscall. The catch is that the 32-bit compat syscall is not
used in x86_64 upstream. So at the time of writing, 32-bit programs
on large x86_64 numa systems will be broken if they use
set_mempolicy. OTOH they could not have been exploited either.

On other architectures the compat syscall is connected. Including
PowerPC which has also been included as well. It is possible some
vendors connected the x86_64 compat call in their kernel branch.

The kernel allocates memory from the user's stack as a temporary
work area. Allowing it to copy the node array of 32-bit fields to
64-bit fields. It uses user memory so that it can share the
non-compatability syscall functions which use copy_from_user()
internally.

Originally the compat call would copy a chunk of the
uninitialized kernel stack to the user stack before checking the
validation result. This meant when the user passed in an invalid
node_mask_ptr. They would get kernel stack data somewhere below
their stack pointer.

So we allocate and set an array on the stack (larger than any
redzone). Then move the stack pointer to the beginning of the
array. Then move it back after the syscall. We can then check to
see if the array has been modified.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `cf01fb9985e8 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cf01fb9985e8>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2017-7616 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2017-7616>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`supported_archs <tst_test>`
     - | x86
       | ppc


.. raw:: html

    <hr>

set_tid_address01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/set_tid_address/set_tid_address01.c>`__

Verify the basic functionality of set_tid_address() syscall.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

setdomainname01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setdomainname/setdomainname01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

setdomainname02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setdomainname/setdomainname02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

setdomainname03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setdomainname/setdomainname03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

setegid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setegid/setegid01.c>`__

Verify that setegid() sets the effective UID of the calling process
correctly, and does not modify the saved GID and real GID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setegid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setegid/setegid02.c>`__

Verify that setegid() fails with EPERM when the calling process is not
privileged and egid does not match the current real group ID,
current effective group ID, or current saved set-group-ID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setfsgid01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setfsgid/setfsgid01.c>`__

Verify that setfsgid() correctly updates the filesystem group ID
to the value given in fsgid argument.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setfsgid02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setfsgid/setfsgid02.c>`__

Testcase for setfsgid() syscall to check that

- privileged user can change a filesystem group ID different from saved
 value of previous setfsgid() call
- unprivileged user cannot change it

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setfsuid01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setfsuid/setfsuid01.c>`__

Verify that setfsuid() correctly updates the filesystem user ID
to the value given in fsuid argument.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setfsuid02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setfsuid/setfsuid02.c>`__

Verify that setfsuid() syscall fails if an invalid fsuid is given.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setfsuid03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setfsuid/setfsuid03.c>`__

Verify that setfsuid() correctly updates the filesystem uid
when caller is a non-root user and provided fsuid matches
caller's real user ID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setgid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgid/setgid01.c>`__

Calls setgid() with current gid and expects success.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setgid02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgid/setgid02.c>`__

Test if setgid() system call sets errno to EPERM correctly.

**Algorithm**

Call setgid() to set the gid to that of root. Run this test as
nobody, and expect to get EPERM.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setgid03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgid/setgid03.c>`__

**Algorithm**

As a root sets current group id to nobody and expects success.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setgroups01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgroups/setgroups01.c>`__

Check the basic functionality of the setgroups() system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setgroups02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgroups/setgroups02.c>`__

Check that root process can setgroups() supplementary group ID and verify
that getgroups() returns the previously set ID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setgroups03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setgroups/setgroups03.c>`__

Test for EINVAL, EPERM, EFAULT errors.

- setgroups() fails with EINVAL if the size argument value is > NGROUPS.

- setgroups() fails with EPERM if the calling process is not super-user.

- setgroups() fails with EFAULT if the list has an invalid address.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setitimer01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setitimer/setitimer01.c>`__

Spawn a child, verify that setitimer() syscall passes and it ends up
counting inside expected boundaries. Then verify from the parent that
the syscall sent the correct signal to the child.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setitimer02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setitimer/setitimer02.c>`__

Check that setitimer() call fails:

1. EFAULT with invalid itimerval pointer
2. EINVAL when called with an invalid first argument

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setns01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setns/setns01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setns02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setns/setns02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setpgid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpgid/setpgid01.c>`__

Verify basic setpgid() functionality, re-setting group ID inside both parent
and child. In the first case, we obtain getpgrp() and set it. In the second
case, we use setpgid(0, 0).

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setpgid02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpgid/setpgid02.c>`__

Verify that setpgid(2) syscall fails with:

- EINVAL when given pgid is less than 0.
- ESRCH when pid is not the calling process and not a child of
the calling process.
- EPERM when an attempt was made to move a process into a nonexisting
process group.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setpgid03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpgid/setpgid03.c>`__

Tests setpgid(2) errors:

- EPERM The process specified by pid must not be a session leader.
- EPERM The calling process, process specified by pid and the target
  process group must be in the same session.
- EACCESS Proccess cannot change process group ID of a child after child
  has performed exec()

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

setpgrp02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpgrp/setpgrp02.c>`__

Testcase to check the basic functionality of the setpgrp(2) syscall.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setpriority01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpriority/setpriority01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

setpriority02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setpriority/setpriority02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setregid01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setregid/setregid01.c>`__

Verify the basic functionality of setregid(2) system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setregid02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setregid/setregid02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setregid03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setregid/setregid03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setregid04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setregid/setregid04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresgid01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresgid/setresgid01.c>`__

Verify that setresgid() syscall correctly sets real user ID, effective user
ID and the saved set-user ID in the calling process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresgid02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresgid/setresgid02.c>`__

Verify that setresgid() will successfully set the expected GID when called
by root with the following combinations of arguments:

- setresgid(-1, -1, -1)
- setresgid(-1, -1, other)
- setresgid(-1, other, -1)
- setresgid(other, -1, -1)
- setresgid(root, root, root)
- setresgid(root, main, main)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresgid03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresgid/setresgid03.c>`__

Verify that setresgid() fails with EPERM if unprivileged user tries to set
process group ID which requires higher permissions.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresgid04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresgid/setresgid04.c>`__

Verify that setresgid() syscall always sets the file system GID to the same
value as the new effective GID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresuid01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresuid/setresuid01.c>`__

Test setresuid() when executed by root.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresuid02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresuid/setresuid02.c>`__

Test that a non-root user can change the real, effective and saved uid
values through the setresuid system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresuid03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresuid/setresuid03.c>`__

Test that the setresuid system call sets the proper errno values when
a non-root user attempts to change the real, effective or saved uid
to a value other than one of the current uid, the current effective uid
or the current saved uid.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresuid04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresuid/setresuid04.c>`__

Verify that setresuid() behaves correctly with file permissions.
The test creates a file as ROOT with permissions 0644, does a setresuid
to change euid to a non-root user and tries to open the file with RDWR
permissions, which should fail with EACCES errno.
The same test is done in a fork also to check that child process also
inherits new euid and open fails with EACCES.
Test verifies the successful open action after reverting the euid back
ROOT user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setresuid05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setresuid/setresuid05.c>`__

Verify that after updating euid with setresuid(), any file creation
also gets the new euid as its owner user ID.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid01.c>`__

Verify the basic functionality of setreuid(2) system call when executed
as non-root user.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setreuid02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid02.c>`__

Test setreuid() when executed by root.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid03.c>`__

Test setreuid() when executed by an unpriviledged user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid04.c>`__

Verify that root user can change the real and effective uid to an
unprivileged user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid05
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid05.c>`__

Test the setreuid() feature, verifying the role of the saved-set-uid
and setreuid's effect on it.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid06
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid06.c>`__

Verify that setreuid(2) syscall fails with EPERM errno when the calling
process is not privileged and a change other than
(i) swapping the effective user ID with the real user ID, or
(ii) setting one to the value of the other or
(iii) setting the effective user ID to the value of the saved set-user-ID
was specified.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setreuid07
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setreuid/setreuid07.c>`__

Check if setreuid behaves correctly with file permissions.
The test creates a file as ROOT with permissions 0644, does a setreuid
and then tries to open the file with RDWR permissions.
The same test is done in a fork to check if new UIDs are correctly
passed to the child process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setrlimit02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setrlimit/setrlimit02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setrlimit03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setrlimit/setrlimit03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setrlimit04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setrlimit/setrlimit04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setrlimit05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setrlimit/setrlimit05.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setrlimit06
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setrlimit/setrlimit06.c>`__

Set CPU time limit for a process and check its behavior
after reaching CPU time limit

- Process got SIGXCPU after reaching soft limit of CPU time
- Process got SIGKILL after reaching hard limit of CPU time

Test is also a regression test for kernel bug:
c3bca5d450b62 ("posix-cpu-timers: Ensure set_process_cpu_timer is always evaluated")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c3bca5d450b62 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c3bca5d450b62>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2


.. raw:: html

    <hr>

setsockopt01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt01.c>`__

Verify that setsockopt() fails and set errno:

- EBADF on invalid file descriptor
- ENOTSOCK on non-socket file descriptor
- EFAULT on invalid option buffer
- EINVAL on invalid optlen
- ENOPROTOOPT on invalid level
- ENOPROTOOPT on invalid option name (UDP)
- ENOPROTOOPT on invalid option name (IP)
- ENOPROTOOPT on invalid option name (TCP)

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setsockopt02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt02.c>`__

Test for CVE-2017-7308 on a raw socket's ring buffer

Try to set tpacket_req3.tp_sizeof_priv to a value with the high bit set. So
that tp_block_size < tp_sizeof_priv. If the vulnerability is present then
this will cause an integer arithmetic overflow and the absurd
tp_sizeof_priv value will be allowed. If it has been fixed then setsockopt
will fail with EINVAL.

We also try a good configuration to make sure it is not failing with EINVAL
for some other reason.

For a better and more interesting discussion of this CVE see:
https://googleprojectzero.blogspot.com/2017/05/exploiting-linux-kernel-via-packet.html

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-7308 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-7308>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setsockopt03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt03.c>`__

Test for CVE-2016-4997

For a full explanation of how the vulnerability works see:
https://github.com/nccgroup/TriforceLinuxSyscallFuzzer/tree/master/crash_reports/report_compatIpt

The original vulnerability was present in the 32-bit compatibility system
call, so the test should be compiled with -m32 and run on a 64-bit kernel.
For simplicities sake the test requests root privileges instead of creating
a user namespace.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ce683e5f9d04 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ce683e5f9d04>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2016-4997 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2016-4997>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setsockopt04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt04.c>`__

CVE-2016-9793

With kernels between version 3.11 and 4.8 missing commit b98b0bc8 it
is possible to pass a very high unsigned integer as send buffer size
to a socket which is then interpreted as a negative value.

This can be used to escalate privileges by every user that has the
CAP_NET_ADMIN capability.

For additional information about this CVE see:
https://www.suse.com/security/cve/CVE-2016-9793/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b98b0bc8c431 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b98b0bc8c431>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-9793 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9793>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setsockopt05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt05.c>`__

CVE-2017-1000112

Check that UDP fragmentation offload doesn't cause memory corruption
if the userspace process turns off UFO in between two send() calls.

Kernel crash fixed in 4.13
85f1bd9a7b5a ("udp: consistently apply ufo or fragmentation")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `85f1bd9a7b5a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=85f1bd9a7b5a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-1000112 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000112>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

setsockopt06
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt06.c>`__

CVE-2016-8655

Check for race condition between packet_set_ring() and tp_version. On some
kernels, this may lead to use-after-free.

Kernel crash fixed in 4.9
84ac7260236a ("packet: fix race condition in packet_set_ring")

Test timeout defaults is 30 seconds.
Maximum runtime is 270 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `84ac7260236a <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=84ac7260236a>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2016-8655 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-8655>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

setsockopt07
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt07.c>`__

CVE-2017-1000111

Check for race condition between packet_set_ring() and tp_reserve.
The race allows you to set tp_reserve bigger than ring buffer size.
While this will cause truncation of all incoming packets to 0 bytes,
sanity checks in tpacket_rcv() prevent any exploitable buffer overflows.

Race fixed in v4.13
c27927e372f0 ("packet: fix tp_reserve race in packet_set_ring")

Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c27927e372f0 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c27927e372f0>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-1000111 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000111>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

setsockopt08
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt08.c>`__

This will reproduce the bug on x86_64 in 32bit compatibility
mode. It is most reliable with KASAN enabled. Otherwise it relies
on the out-of-bounds write corrupting something which leads to a
crash. It will run in other scenarious, but is not a test for the
CVE.

See https://google.github.io/security-research/pocs/linux/cve-2021-22555/writeup.html

Also below is Nicolai's detailed description of the bug itself.

The problem underlying CVE-2021-22555 fixed by upstream commit
b29c457a6511 ("netfilter: x_tables: fix compat match/target pad
out-of-bound write") is that the (now removed) padding zeroing code
in xt_compat_target_from_user() had been based on the premise that
the user specified ->u.user.target_size, which will be considered
for the target buffer allocation size, is greater or equal than
what's needed to fit the corresponding xt_target instance's
->targetsize: if OTOH the user specified ->u.user.target_size is
too small, then the memset() destination address calculated by
adding ->targetsize to the payload start will not point at, but
into or even past the padding.

For the table's last entry's target record, this will result in an
out-of-bounds write past the destination buffer allocated for the converted
table. The code below will create a (compat) table such that the converted
table's calculated size will fit exactly into a slab size of 1024 bytes and
that the memset() in xt_compat_target_from_user() will write past this slab.

The table will consist of

 * the mandatory struct compat_ipt_replace header,
 * a single entry consisting of
   ** the mandatory compat_ipt_entry header
   ** a single 'state' match entry of appropriate size for
     controlling the out-of-bounds write when converting
     the target entry following next,
   ** a single 'REJECT' target entry.

The kernel will transform this into a buffer containing (in
this order)

* a xt_table_info
* a single entry consisting of
  ** its ipt_entry header
  ** a single 'state' match entry
  ** followed by a single 'REJECT' target entry.

The expected sizes for the 'state' match entries as well as the
'REJECT' target are the size of the base header struct (32 bytes)
plus the size of an unsigned int (4 bytes) each.

In the course of the compat => non-compat conversion, the kernel will insert
four bytes of padding after the unsigned int payload (c.f. 'off' adjustments
via xt_compat_match_offset() and xt_compat_target_offset() in
xt_compat_match_from_user() and xt_compat_target_from_user() resp.).

This code is based on the premise that the user sets the given
->u.user.match_size or ->u.user.target_size consistent to the
COMPAT_XT_ALIGN()ed payload size as specified by the corresponding xt_match
instance's ->matchsize or xt_target instance's ->targetsize.

That is, the padding gets inserted unconditionally during the transformation,
independent of the actual values of ->u.user.match_size or
->u.user.target_size and the result ends up getting layed out with proper
 alignment only if said values match the expectations.

That's not a problem in itself, but this unconditional insertion of padding
must be taken into account in the match_size calculation below.

For the match_size calculation below, note that the chosen
target slab size is 1024 and that

 * sizeof(xt_table_info) = 64
 * sizeof(ipt_entry) = 112
 * the kernel will insert four bytes of padding
   after the match and target entries each.
 * sizeof(struct xt_entry_target) = 32

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `b29c457a6511 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b29c457a6511>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-22555 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22555>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_NETFILTER_XT_MATCH_STATE
       | CONFIG_IP_NF_TARGET_REJECT
       | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

setsockopt09
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt09.c>`__

Check for possible double free of rx_owner_map after switching packet
interface versions aka CVE-2021-22600.

Kernel crash fixed in:

 commit ec6af094ea28f0f2dda1a6a33b14cd57e36a9755
 Author: Willem de Bruijn <willemb@google.com>
 Date:   Wed Dec 15 09:39:37 2021 -0500

 net/packet: rx_owner_map depends on pg_vec

 commit c800aaf8d869f2b9b47b10c5c312fe19f0a94042
 Author: WANG Cong <xiyou.wangcong@gmail.com>
 Date:   Mon Jul 24 10:07:32 2017 -0700

 packet: fix use-after-free in prb_retire_rx_blk_timer_expired()

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ec6af094ea28 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ec6af094ea28>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `c800aaf8d869 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c800aaf8d869>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2021-22600 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-22600>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y


.. raw:: html

    <hr>

setsockopt10
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setsockopt/setsockopt10.c>`__

Reproducer for CVE-2023-0461 which is an exploitable use-after-free
in a TLS socket. In fact it is exploitable in any User Level
Protocol (ULP) which does not clone its context when accepting a
connection.

Because it does not clone the context, the child socket which is
created on accept has a pointer to the listening socket's
context. When the child is closed the parent's context is freed
while it still has a reference to it.

TLS can only be added to a socket which is connected. Not listening
or disconnected, and a connected socket can not be set to
listening. So we have to connect the socket, add TLS, then
disconnect, then set it to listening.

To my knowledge, setting a socket from open to disconnected
requires a trick; we have to "connect" to an unspecified
address. This could explain why the bug was not found earlier.

The accepted fix was to disallow listening on sockets with a ULP
set which does not have a clone function.

The test uses two processes, first the child acts as a server so
that the parent can create the TLS socket. Then the child connects
to the parent's TLS socket.

When we try to listen on the parent, the current kernel should
return EINVAL. However if clone is implemented then this could
become a valid operation. It is also quite easy to crash the kernel
if we set some TLS options before doing a double free.

commit 2c02d41d71f90a5168391b6a5f2954112ba2307c
Author: Paolo Abeni <pabeni@redhat.com>
Date:   Tue Jan 3 12:19:17 2023 +0100

 net/ulp: prevent ULP without clone op from entering the LISTEN status

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `2c02d41d71f90 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2c02d41d71f90>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2023-0461 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-0461>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TLS
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

settimeofday01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/settimeofday/settimeofday01.c>`__

Check the basic functionality of settimeofday().

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

settimeofday02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/settimeofday/settimeofday02.c>`__

Check that settimeofday() sets errnos correctly.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_SYS_TIME)


.. raw:: html

    <hr>

setuid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setuid/setuid01.c>`__

Verify that setuid(2) returns 0 and effective uid has
been set successfully as a normal or super user.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

setuid03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setuid/setuid03.c>`__

This test will switch to nobody user for correct error code collection.
Verify setuid returns errno EPERM when it switches to root_user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setuid04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setuid/setuid04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

setxattr01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setxattr/setxattr01.c>`__

Tests for setxattr(2) and make sure setxattr(2) handles error
conditions correctly.

- EINVAL - any other flags being set except XATTR_CREATE and XATTR_REPLACE
- ENODATA - with XATTR_REPLACE flag set but the attribute does not exist
- ERANGE - create new attr with name length greater than XATTR_NAME_MAX(255)
- E2BIG - create new attr whose value length is greater than XATTR_SIZE_MAX(65536)
- SUCCEED - create new attr whose value length is zero
- EEXIST - replace the attr value without XATTR_REPLACE flag being set
- SUCCEED - replace attr value with XATTR_REPLACE flag being set
- ERANGE - create new attr whose key length is zero
- EFAULT - create new attr whose key is NULL

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

setxattr02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setxattr/setxattr02.c>`__

In the user.* namespace, only regular files and directories can
have extended attributes. Otherwise setxattr(2) will return -1
and set errno to EPERM.

- SUCCEED - set attribute to a regular file
- SUCCEED - set attribute to a directory
- EEXIST - set attribute to a symlink which points to the regular file
- EPERM - set attribute to a FIFO
- EPERM - set attribute to a char special file
- EPERM - set attribute to a block special file
- EPERM - set attribute to a UNIX domain socket

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

setxattr03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/setxattr/setxattr03.c>`__

setxattr(2) to immutable and append-only files should get EPERM

- Set attribute to a immutable file
- Set attribute to a append-only file

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test04
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test05
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shell_test06
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tests/shell_test06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

shm_comm
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/shm_comm.c>`__

Test if SysV IPC shared memory is properly working between two different
namespaces.

**Algorithm**

1. Clones two child processes with CLONE_NEWIPC flag, each child
   allocates System V shared memory segment (shm) with the _identical_
   key and attaches that segment into its address space.
2. Child1 writes into the shared memory segment.
3. Child2 writes into the shared memory segment.
4. Writes to the shared memory segment with the identical key but from
   two different IPC namespaces should not interfere with each other
   and so child1 checks whether its shared segment wasn't changed
   by child2, if it wasn't test passes, otherwise test fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shmat01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmat/shmat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmat02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmat/shmat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmat03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmat/shmat03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `95e91b831f87 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=95e91b831f87>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `a73ab244f0da <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a73ab244f0da>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `8f89c007b6de <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8f89c007b6de>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmat04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmat/shmat04.c>`__

When debugging issues with a workload using SysV shmem, Michal Hocko has
come up with a reproducer that shows how a series of mprotect()
operations can result in an elevated shm_nattch and thus leak of the
resource.

The problem is caused by wrong assumptions in vma_merge() commit
714965ca8252 ("mm/mmap: start distinguishing if vma can be removed in
mergeability test"). The shmem vmas have a vma_ops->close callback
that decrements shm_nattch, and we remove the vma without calling it.

Patch: https://lore.kernel.org/all/20240222215930.14637-2-vbabka@suse.cz/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `fc0c8f9089c2 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=fc0c8f9089c2>`_




.. raw:: html

    <hr>

shmctl01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl01.c>`__

Verify that shmctl() IPC_STAT and SHM_STAT reports correct data.

The shm_nattach is excercised by:

- forking() children that attach and detach SHM
- attaching the SHM before fork and letting the children detach it

We check that the number shm_nattach is correct after each step we do.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

shmctl02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl02.c>`__

Test for EACCES, EFAULT and EINVAL errors.

* EACCES - segment has no read or write permissions
* EFAULT - IPC_SET & buf isn't valid
* EFAULT - IPC_STAT & buf isn't valid
* EINVAL - the command is not valid
* EINVAL - the shmid is not valid
* EINVAL - the shmid belongs to removed shm

* EACCES - attempt to stat root-owned shm
* EPERM  - attempt to delete root-owned shm
* EPERM  - attempt to change root-owned shm
* EPERM  - attempt to lock root-owned shm
* EPERM  - attempt to unlock root-owned shm

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

shmctl03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl03.c>`__

Call shmctl() with IPC_INFO flag and check that the data are consistent with
/proc/sys/kernel/shm*.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

shmctl04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl04.c>`__

Call shmctl() with SHM_INFO flag and check that:

* The returned index points to a valid SHM by calling SHM_STAT_ANY
* Also count that valid indexes < returned max index sums up to used_ids
* And the data are consistent with /proc/sysvipc/shm

There is a possible race between the call to the shmctl() and read from the
proc file so this test cannot be run in parallel with any IPC testcases that
adds or removes SHM segments.

Note what we create a SHM segment in the test setup to make sure that there
is at least one during the testrun.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmctl05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl05.c>`__

Regression test for commit
3f05317d9889 (ipc/shm: fix use-after-free of shm file via remap_file_pages()).

This bug allowed the remap_file_pages() syscall to use the file of a System
V shared memory segment after its ID had been reallocated and the file
freed. This test reproduces the bug as a NULL pointer dereference in
touch_atime(), although it's a race condition so it's not guaranteed to
work. This test is based on the reproducer provided in the fix's commit
message.

Test timeout defaults is 30 seconds.
Maximum runtime is 10 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `3f05317d9889 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3f05317d9889>`_




.. raw:: html

    <hr>

shmctl06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl06.c>`__

Cross verify the _high fields being set to 0 by the kernel.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shmctl07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl07.c>`__

Test for a SHM_LOCK and SHM_UNLOCK.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

shmctl08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmctl/shmctl08.c>`__

Test for a SHM_SET.

The test clears the group and others bits from the shm_perm.mode and checks
the result as well as if the ctime was updated correctly.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

shmdt01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmdt/shmdt01.c>`__

This case check whether we get SIGSEGV when write a value to a detached
shared memory resource.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmdt02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmdt/shmdt02.c>`__

Tests basic error handing of the shmdt syscall.

- EINVAL there is no shared memory segment attached at shmaddr.
- EINVAL shmaddr is not aligned on a page boundary.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

shmem_2nstest
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/shmem_2nstest.c>`__

Test if SysV IPC shared memory is properly used between two namespaces.

**Algorithm**

Create two 'containers'.
In container1, create Shared Memory segment with a specific key.
In container2, try to access the MQ created in container1.

Test is PASS if flag = none and the shmem seg is accessible in container2.
If flag = unshare/clone and the shmem seg is not accessible in container2.
If shmem seg is not accessible in container2, creates new shmem with same
key to double check isloation in IPCNS.

Test is FAIL if flag = none and the shmem seg is not accessible, if
flag = unshare/clone and shmem seg is accessible in container2 or if the new
shmem seg creation Fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare|none>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shmget02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmget/shmget02.c>`__

Test for ENOENT, EEXIST, EINVAL, EACCES, EPERM errors.

- ENOENT - No segment exists for the given key and IPC_CREAT was not specified.
- EEXIST - the segment exists and IPC_CREAT | IPC_EXCL is given.
- EINVAL - A new segment was to be created and size is less than SHMMIN or
  greater than SHMMAX. Or a segment for the given key exists, but size is
  gran eater than the size of that segment.
- EACCES - The user does not have permission to access the shared memory segment.
- EPERM - The SHM_HUGETLB flag was specified, but the caller was not
  privileged (did not have the CAP_IPC_LOCK capability) and is not a member
  of the sysctl_hugetlb_shm_group group.
- ENOMEM - The SHM_HUGETLB flag was specified, the caller was privileged but
  not have enough hugepage memory space.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/shmmax
   * -  :c:struct:`hugepages <tst_test>`
     - TST_NO_HUGEPAGES


.. raw:: html

    <hr>

shmget03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmget/shmget03.c>`__

Test for ENOSPC error.

ENOSPC -  All possible shared memory segments have been taken (SHMMNI).

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shmget04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmget/shmget04.c>`__

Test for EACCES error.

Create a shared memory segment without read or write permissions under
unpriviledged user and call shmget() with SHM_RD/SHM_WR/SHM_RW flag to
trigger EACCES error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

shmget05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmget/shmget05.c>`__

It is a basic test for shm_next_id.

shm_next_id specifies desired id for next allocated IPC shared memory. By
default it's equal to -1, which means generic allocation logic.
Possible values to set are in range {0..INT_MAX}.
The value will be set back to -1 by kernel after successful IPC object
allocation.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CHECKPOINT_RESTORE=y


.. raw:: html

    <hr>

shmget06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ipc/shmget/shmget06.c>`__

It is a basic test for shm_next_id.

When the shared memory segment identifier that shm_next_id stored is already
in use, call shmget with different key just use another unused value in range
[0,INT_MAX]. Kernel doesn't guarantee the desired id.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_CHECKPOINT_RESTORE=y


.. raw:: html

    <hr>

shmnstest
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/sysvipc/shmnstest.c>`__

Test if SysV IPC shared memory with a specific key is shared between
processes and namespaces.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare|none>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shutdown01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/shutdown/shutdown01.c>`__

This test verifies the following shutdown() functionalities:

- SHUT_RD should enable send() ops but disable recv() ops
- SHUT_WR should enable recv() ops but disable send() ops
- SHUT_RDWR should disable both recv() and send() ops

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

shutdown02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/shutdown/shutdown02.c>`__

This test verifies the following shutdown() errors:

- EBADF sockfd is not a valid file descriptor
- EINVAL An invalid value was specified in how
- ENOTCONN The specified socket is not connected
- ENOTSOCK The file descriptor sockfd does not refer to a socket

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sigaltstack02
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigaltstack/sigaltstack02.c>`__

Verify that sigaltstack() fails with return value -1 and set expected errno:

- EINVAL on invalid value.
- ENOMEM on stack is < MINSIGSTKSZ.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sighold02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sighold/sighold02.c>`__

This test checks following conditions:

1. sighold action to turn off the receipt of all signals was done without error.
2. After signals were held, and sent, no signals were trapped.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

signal01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signal/signal01.c>`__

Test SIGKILL for these items:
1. SIGKILL can not be set to be ignored, errno:EINVAL (POSIX).
2. SIGKILL can not be reset to default, errno:EINVAL (POSIX).
3. SIGKILL can not be set to be caught, errno:EINVAL (POSIX).
4. SIGKILL can not be ignored.
5. SIGKILL is reset to default failed but processed by default.
6. SIGKILL can not be caught.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signal02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signal/signal02.c>`__

Test that we get an error using illegal signals.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signal03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signal/signal03.c>`__

Set signals to be ignored.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signal04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signal/signal04.c>`__

Restore signals to default behavior.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signal05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signal/signal05.c>`__

Set the signal handler to our own function.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signalfd01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signalfd/signalfd01.c>`__

Verify that signalfd() works as expected.

- signalfd() can create fd, and fd can receive signal.
- signalfd() can reassign fd, and fd can receive signal.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

signalfd02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/signalfd/signalfd02.c>`__

Verify that signalfd(2) fails with:

- EBADF when fd is invalid
- EINVAL when fd is not a valid signalfd file descriptor
- EINVAL when flags are invalid

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sigpending02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigpending/sigpending02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

sigsuspend01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigsuspend/sigsuspend01.c>`__

Verify the basic sigsuspend(2) syscall functionality:

- sigsuspend(2) can replace process's current signal mask by the specified
  signal mask and suspend the process execution until the delivery of a
  signal.
- sigsuspend(2) should return after the execution of signal handler and
  restore the previous signal mask.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sigsuspend02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigsuspend/sigsuspend02.c>`__

Verify that sigsuspend(2) fails with

- EFAULT mask points to memory which is not a valid part of the
         process address space.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sigtimedwait01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigtimedwait/sigtimedwait01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sigwait01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigwait/sigwait01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sigwaitinfo01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sigwaitinfo/sigwaitinfo01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

snd_seq01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sound/snd_seq01.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d15d662e89fc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d15d662e89fc>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-7566 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-7566>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

snd_timer01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sound/snd_timer01.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d11662f4f798 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d11662f4f798>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `ba3021b2c79b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ba3021b2c79b>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-1000380 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000380>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

socket01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socket/socket01.c>`__

Test creating TCP, UDP, and Unix doman dgram sockets with socket() syscall.

Also verify that socket() fails and set proper errno

- EAFNOSUPPORT on invalid domain
- EINVAL on invalid type
- EPROTONOSUPPORT on raw open as non-root
- EPROTONOSUPPORT on UDP stream
- EPROTONOSUPPORT on TCP dgram
- EPROTONOSUPPORT on ICMP stream

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

socket02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socket/socket02.c>`__

Test socket() with SOCK_CLOEXEC and SOCK_NONBLOCK flags.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

socketcall01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socketcall/socketcall01.c>`__

Basic test for the socketcall(2) raw syscall.

Test creating TCP, UDP, raw socket and unix domain dgram.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

socketcall02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socketcall/socketcall02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

socketcall03
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socketcall/socketcall03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

socketpair01
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socketpair/socketpair01.c>`__

Verify that socketpair(2) fails and set proper errno

- EAFNOSUPPORT on invalid domain
- EINVAL on invalid type
- EPROTONOSUPPORT on raw open as non-root
- EFAULT on bad aligned pointer
- EFAULT on bad unaligned pointer
- EOPNOTSUPP on UDP socket
- EPROTONOSUPPORT on TCP dgram
- EOPNOTSUPP on TCP socket
- EPROTONOSUPPORT on ICMP stream

Also test creating UNIX domain dgram.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

socketpair02
------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/socketpair/socketpair02.c>`__

Test socket() with SOCK_CLOEXEC and SOCK_NONBLOCK flags.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

splice01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

splice02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice02.c>`__

Original reproducer for kernel fix
bf40d3435caf NFS: add support for splice writes
from v2.6.31-rc1.

http://lkml.org/lkml/2009/4/2/55

**ALGORITHM**
- create pipe
- fork(), child replace stdin with pipe
- parent write to pipe
- child slice from pipe
- check resulted file size and content

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -s
     - Size of output file in bytes (default: 16x max pipe size, i.e. 1M on intel)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

splice03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice03.c>`__

Verify that, splice(2) returns -1 and sets errno to

1. EBADF if the file descriptor fd_in is not valid
2. EBADF if the file descriptor fd_out is not valid
3. EBADF if the file descriptor fd_in does not have proper read-write mode
4. EINVAL if target file is opened in append mode
5. EINVAL if neither of the descriptors refer to a pipe
6. ESPIPE if off_in is not NULL when the file descriptor fd_in refers to a pipe
7. ESPIPE if off_out is not NULL when the file descriptor fd_out refers to a pipe

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

splice04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Length of test data (in bytes)




.. raw:: html

    <hr>

splice05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice05.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Length of test data (in bytes)




.. raw:: html

    <hr>

splice06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice06.c>`__

This test is cover splice() on proc files.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 5.11
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/fs/pipe-max-size
       | /proc/sys/kernel/domainname
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

splice07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice07.c>`__

Iterate over all kinds of file descriptors and feed splice() with all possible
combinations where at least one file descriptor is invalid. We do expect the
syscall to fail either with EINVAL or EBADF.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

splice08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice08.c>`__

Test for splicing from /dev/zero and /dev/full.

The support for splicing from /dev/zero and /dev/full was removed in:
c6585011bc1d ("splice: Remove generic_file_splice_read()")

And added back in:
1b057bd800c3 ("drivers/char/mem: implement splice() for /dev/zero, /dev/full")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.7


.. raw:: html

    <hr>

splice09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/splice/splice09.c>`__

Test for splicing to /dev/zero and /dev/null these two devices discard all
data written to them.

The support for splicing to /dev/zero was added in:
1b057bd800c3 ("drivers/char/mem: implement splice() for /dev/zero, /dev/full")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.7


.. raw:: html

    <hr>

squashfs01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/fs/squashfs/squashfs01.c>`__

Kernel commits

- f37aa4c7366 (squashfs: add more sanity checks in id lookup)
- eabac19e40c (squashfs: add more sanity checks in inode lookup)
- 506220d2ba2 (squashfs: add more sanity checks in xattr id lookup)

added some sanity checks, that verify the size of
inode lookup, id (uid/gid) and xattr blocks in the squashfs,
but broke mounting filesystems with completely filled blocks.
A block has a max size of 8192.
An inode lookup entry has an uncompressed size of 8 bytes,
an id block 4 bytes and an xattr block 16 bytes.


To fill up at least one block for each of the three tables,
2048 files with unique uid/gid and xattr are created.


The bugs are fixed in kernel commits

- c1b2028315c (squashfs: fix inode lookup sanity checks)
- 8b44ca2b634 (squashfs: fix xattr id and id lookup sanity checks)

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c1b2028315c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c1b2028315c>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `8b44ca2b634 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8b44ca2b634>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - squashfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`dev_min_size <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - mksquashfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

stack_clash
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/stack_clash.c>`__

This is a regression test of the Stack Clash [1] vulnerability. This tests
that there is at least 256 PAGE_SIZE of stack guard gap which is considered
hard to hop above. Code adapted from the Novell's bugzilla [2].

The code `mmap(2)`s region close to the stack end. The code then allocates
memory on stack until it hits guard page and SIGSEGV or SIGBUS is generated
by the kernel. The signal handler checks that fault address is further than
THRESHOLD from the mmapped area.

We read /proc/self/maps to examine exact top of the stack and `mmap(2)`
our region exactly GAP_PAGES * PAGE_SIZE away. We read /proc/cmdline to
see if a different stack_guard_gap size is configured. We set stack limit
to infinity and preallocate REQ_STACK_SIZE bytes of stack so that no calls
after `mmap` are moving stack further.

If the architecture meets certain requirements (only x86_64 is verified)
then the test also tests that new mmap()s can't be placed in the stack's
guard gap. This part of the test works by forcing a bottom up search. The
assumptions are that the stack grows down (start gap) and either:

1. The default search is top down, and will switch to bottom up if
     space is exhausted.
2. The default search is bottom up and the stack is above mmap base.

[1] https://blog.qualys.com/securitylabs/2017/06/19/the-stack-clash
[2] https://bugzilla.novell.com/show_bug.cgi?id=CVE-2017-1000364

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-1000364 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000364>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `58c5d0d6d522 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=58c5d0d6d522>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

starvation
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/sched/cfs-scheduler/starvation.c>`__


Thread starvation test. On fauluty kernel the test timeouts.

Original reproducer taken from:
https://lore.kernel.org/lkml/9fd2c37a05713c206dcbd5866f67ce779f315e9e.camel@gmx.de/

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -l
     - Number of loops (default 2000000)
   * - -t
     - Max timeout (default 240s)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

stat01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stat/stat01.c>`__

Verify that, stat(2) succeeds to get the status of a file and fills the
stat structure elements regardless of whether process has or doesn't
have read access to the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

stat02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stat/stat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

stat03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stat/stat03.c>`__

check stat() with various error conditions that should produce
EACCES, EFAULT, ENAMETOOLONG,  ENOENT, ENOTDIR, ELOOP

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

stat04
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stat/stat04.c>`__

This test checks that stat() executed on file provide the same information
of symlink linking to it.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statfs01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statfs/statfs01.c>`__

Verify that statfs() syscall executes successfully on all
available filesystems.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statfs02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statfs/statfs02.c>`__

Tests for failures:

- ENOTDIR A component of the pathname, which is not a directory.
- ENOENT A filename which doesn't exist.
- ENAMETOOLONG A pathname which is longer than MAXNAMLEN.
- EFAULT A pathname pointer outside the address space of the process.
- EFAULT A buf pointer outside the address space of the process.
- ELOOP A filename which has too many symbolic links.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statfs03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statfs/statfs03.c>`__

Verify that statfs(2) fails with errno EACCES when search permission
is denied for a component of the path prefix of path.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount01.c>`__

This test verifies that statmount() is working with no mask flags.

**Algorithm**

- create a mount point
- run statmount() on the mount point without giving any mask
- read results and check that mask and size are correct

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount02
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount02.c>`__

This test verifies that statmount() is correctly reading basic filesystem
info using STATMOUNT_SB_BASIC.
The btrfs validation is currently skipped due to the lack of support for VFS.

**Algorithm**

- create a mount point and read its mount info
- run statmount() on the mount point using STATMOUNT_SB_BASIC
- read results and check if mount info are correct

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | fuse
       | btrfs
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount03
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount03.c>`__

This test verifies that statmount() is correctly reading mount information
(mount id, parent mount id, mount attributes etc.) using STATMOUNT_MNT_BASIC.

**Algorithm**

- create a mount point
- create a new parent folder inside the mount point and obtain its mount info
- create the new "/" mount folder and obtain its mount info
- run statmount() on the mount point using STATMOUNT_MNT_BASIC
- read results and check if mount info are correct

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount04
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount04.c>`__

This test verifies that statmount() is correctly reading propagation from
what mount in current namespace using STATMOUNT_PROPAGATE_FROM.

**Algorithm**

- create a mount point
- propagate a mounted folder inside the mount point
- run statmount() on the mount point using STATMOUNT_PROPAGATE_FROM
- read results and check propagated_from parameter contains the propagated
  folder ID

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount05
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount05.c>`__

This test verifies STATMOUNT_MNT_ROOT and STATMOUNT_MNT_POINT functionalities
of statmount(). In particular, STATMOUNT_MNT_ROOT will give the mount root
(i.e. mount --bind /mnt /bla -> /mnt) and STATMOUNT_MNT_POINT will
give the mount point (i.e. mount --bind /mnt /bla -> /bla).

**Algorithm**

- create a mount point
- mount a folder inside the mount point
- run statmount() on the mounted folder using STATMOUNT_MNT_ROOT
- read results and check if contain the mount root path
- run statmount() on the mounted folder using STATMOUNT_MNT_POINT
- read results and check if contain the mount point path

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount06
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount06.c>`__

This test verifies that statmount() is correctly reading name of the
filesystem type using STATMOUNT_FS_TYPE.

**Algorithm**

- create a mount point
- run statmount() on the mount point using STATMOUNT_FS_TYPE
- read results and check if contain the name of the filesystem

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - fuse
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount07
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount07.c>`__

This test verifies that statmount() is raising the correct errors according
with invalid input values.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statmount08
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statmount/statmount08.c>`__

Verify that statmount() raises EPERM when mount point is not accessible.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 6.8
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statvfs01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statvfs/statvfs01.c>`__

Verify that statvfs() executes successfully for all
available filesystems. Verify statvfs.f_namemax field
by trying to create files of valid and invalid length names.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statvfs02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statvfs/statvfs02.c>`__

Verify that statvfs() fails with:

- EFAULT when path points to an invalid address.
- ELOOP when too many symbolic links were encountered in translating path.
- ENAMETOOLONG when path is too long.
- ENOENT when the file referred to by path does not exist.
- ENOTDIR a component of the path prefix of path is not a directory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx01.c>`__

This code tests the functionality of statx system call.

The metadata for normal file are tested against expected values:

- gid
- uid
- mode
- blocks
- size
- nlink
- mnt_id

The metadata for device file are tested against expected values:

- MAJOR number
- MINOR number

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_devfs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

statx02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx02.c>`__

This code tests the following flags with statx syscall:

- AT_EMPTY_PATH
- AT_SYMLINK_NOFOLLOW

A test file and a link for it is created.

To check empty path flag, test file fd alone is passed.
Predefined size of testfile is checked against obtained value.

To check symlink no follow flag, the linkname is statxed.
To ensure that link is not dereferenced, obtained inode is compared
with test file inode.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx03.c>`__

Test basic error handling of statx syscall:

- EBADF - Bad file descriptor
- EFAULT - Bad address
- EINVAL - Invalid argument
- ENOENT - No such file or directory
- ENOTDIR - Not a directory
- ENAMETOOLONG - Filename too long

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11


.. raw:: html

    <hr>

statx04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx04.c>`__

Test whether the kernel properly advertises support for statx() attributes:

- STATX_ATTR_COMPRESSED: The file is compressed by the filesystem.
- STATX_ATTR_IMMUTABLE: The file cannot be modified.
- STATX_ATTR_APPEND: The file can only be opened in append mode for writing.
- STATX_ATTR_NODUMP: File is not a candidate for backup when a backup
                       program such as dump(8) is run.

xfs filesystem doesn't support STATX_ATTR_COMPRESSED flag, so we only test
three other flags.

ext2, ext4, btrfs, xfs and tmpfs support statx syscall since the following commit

 commit 93bc420ed41df63a18ae794101f7cbf45226a6ef
 Author: yangerkun <yangerkun@huawei.com>
 Date:   Mon Feb 18 09:07:02 2019 +0800

 ext2: support statx syscall

 commit 99652ea56a4186bc5bf8a3721c5353f41b35ebcb
 Author: David Howells <dhowells@redhat.com>
 Date:   Fri Mar 31 18:31:56 2017 +0100

 ext4: Add statx support

 commit 04a87e3472828f769a93655d7c64a27573bdbc2c
 Author: Yonghong Song <yhs@fb.com>
 Date:   Fri May 12 15:07:43 2017 -0700

 Btrfs: add statx support

 commit 5f955f26f3d42d04aba65590a32eb70eedb7f37d
 Author: Darrick J. Wong <darrick.wong@oracle.com>
 Date:   Fri Mar 31 18:32:03 2017 +0100

 xfs: report crtime and attribute flags to statx

 commit e408e695f5f1f60d784913afc45ff2c387a5aeb8
 Author: Theodore Ts'o <tytso@mit.edu>
 Date:   Thu Jul 14 21:59:12 2022 -0400

 mm/shmem: support FS_IOC_[SG]ETFLAGS in tmpfs


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `93bc420ed41d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=93bc420ed41d>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `99652ea56a41 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=99652ea56a41>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `04a87e347282 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=04a87e347282>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `5f955f26f3d4 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5f955f26f3d4>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `e408e695f5f1 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e408e695f5f1>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | fuse
       | ntfs
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx05.c>`__

Test statx syscall with STATX_ATTR_ENCRYPTED flag, setting a key is required
for the file to be encrypted by the filesystem.

e4crypt is used to set the encrypt flag (currently supported only by ext4).

Two directories are tested.
First directory has all flags set.
Second directory has no flags set.

Minimum e2fsprogs version required is 1.43.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_cmds <tst_test>`
     - | mkfs.ext4 >= 1.43.0
       | e4crypt
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx06.c>`__

Test the following file timestamps of statx syscall:

- btime - The time before and after the execution of the create system call is noted.

- mtime - The time before and after the execution of the write system call is noted.

- atime - The time before and after the execution of the read system call is noted.

- ctime - The time before and after the execution of the chmod system call is noted.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx07.c>`__

This code tests the following flags:

- AT_STATX_FORCE_SYNC
- AT_STATX_DONT_SYNC

By exportfs cmd creating NFS setup.

A test file is created in server folder and statx is being
done in client folder.

BY AT_STATX_SYNC_AS_STAT getting predefined mode value.
Then, by using AT_STATX_FORCE_SYNC getting new updated vaue
from server file changes.

BY AT_STATX_SYNC_AS_STAT getting predefined mode value.
AT_STATX_FORCE_SYNC is called to create cache data of the file.
Then, by using DONT_SYNC_FILE getting old cached data in client folder,
but mode has been chaged in server file.

The support for SYNC flags was implemented in NFS in:
9ccee940bd5b ("Support statx() mask and query flags parameters")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`filesystems <tst_test>`
     - nfs
   * -  :c:struct:`needs_cmds <tst_test>`
     - exportfs
   * -  :c:struct:`min_kver <tst_test>`
     - 4.16
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx08
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx08.c>`__

This case tests whether the attributes field of statx received expected value
by using flags in the stx_attributes_mask field of statx.
File set with following flags by using SAFE_IOCTL:

- STATX_ATTR_COMPRESSED: The file is compressed by the filesystem.
- STATX_ATTR_IMMUTABLE: The file cannot be modified.
- STATX_ATTR_APPEND: The file can only be opened in append mode for writing.
- STATX_ATTR_NODUMP: File is not a candidate for backup when a backup
                       program such as dump(8) is run.

Two directories are tested.
First directory has all flags set. Second directory has no flags set.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`min_kver <tst_test>`
     - 4.11
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx09
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx09.c>`__

This code tests if STATX_ATTR_VERITY flag in the statx attributes is set correctly.

The statx() system call sets STATX_ATTR_VERITY if the file has fs-verity
enabled. This can perform better than FS_IOC_GETFLAGS and
FS_IOC_MEASURE_VERITY because it doesn't require opening the file, and
opening verity files can be expensive.

Minimum Linux version required is v5.5.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_cmds <tst_test>`
     - mkfs.ext4 >= 1.45.2
   * -  :c:struct:`filesystems <tst_test>`
     - ext4
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_FS_VERITY
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx10
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx10.c>`__

It is a basic test for STATX_DIOALIGN mask on ext4 and xfs filesystem.

- STATX_DIOALIGN   Want stx_dio_mem_align and stx_dio_offset_align value

Check these two values are nonzero under dio situation when STATX_DIOALIGN
in the request mask.

On ext4, files that use certain filesystem features (data journaling,
encryption, and verity) fall back to buffered I/O. But ltp creates own
filesystem by enabling mount_device in tst_test struct. If we set block
device to LTP_DEV environment, we use this block device to mount by using
default mount option. Otherwise, use loop device to simuate it. So it can
avoid these above situations and don't fall back to buffered I/O.

Minimum Linux version required is v6.1.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx11
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx11.c>`__

It is a basic test for STATX_DIOALIGN mask on block device.

- STATX_DIOALIGN   Want stx_dio_mem_align and stx_dio_offset_align value

These two values are tightly coupled to the kernel's current DIO
restrictions on block devices.

Minimum Linux version required is v6.1.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

statx12
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/statx/statx12.c>`__

It is a basic test for STATX_ATTR_MOUNT_ROOT flag.

This flag indicates whether the path or fd refers to the root of a mount
or not.

Minimum Linux version required is v5.8.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

stime01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stime/stime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`restore_wallclock <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

stime02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/stime/stime02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

swapoff01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/swapoff/swapoff01.c>`__

Check that swapoff() succeeds.

Test timeout is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`dev_min_size <tst_test>`
     - 350
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

swapoff02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/swapoff/swapoff02.c>`__

This test case checks whether swapoff(2) system call  returns
 1. EINVAL when the path does not exist
 2. ENOENT when the path exists but is invalid
 3. EPERM when user is not a superuser

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

swapon01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/swapon/swapon01.c>`__

Checks that swapon() succeds with swapfile.
Testing on all filesystems which support swap file.

Test timeout is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_cgroup_ctrls <tst_test>`
     - memory
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

swapon02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/swapon/swapon02.c>`__

This test case checks whether swapon(2) system call returns:

- ENOENT when the path does not exist
- EINVAL when the path exists but is invalid
- EPERM when user is not a superuser
- EBUSY when the specified path is already being used as a swap area

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

swapon03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/swapon/swapon03.c>`__

This test case checks whether swapon(2) system call returns:

 - EPERM when there are more than MAX_SWAPFILES already in use.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

swapping01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/swapping/swapping01.c>`__

Detect heavy swapping during first time swap use.

This case is used for testing kernel commit:
50a15981a1fa ("[S390] reference bit testing for unmapped pages")

The upstream commit fixed a issue on s390/x platform that heavy
swapping might occur in some condition, however since the patch
was quite general, this testcase will be run on all supported
platforms to ensure no regression been introduced.

Details of the kernel fix:

On x86 a page without a mapper is by definition not referenced / old.
The s390 architecture keeps the reference bit in the storage key and
the current code will check the storage key for page without a mapper.
This leads to an interesting effect: the first time an s390 system
needs to write pages to swap it only finds referenced pages. This
causes a lot of pages to get added and written to the swap device.
To avoid this behaviour change page_referenced to query the storage
key only if there is a mapper of the page.

**Algorithm**

Try to allocate memory which size is slightly larger than current
available memory. After allocation done, continue loop for a while
and calculate the used swap size. The used swap size should be small
enough, else it indicates that heavy swapping is occurred unexpectedly.

Test timeout defaults is 30 seconds.
Maximum runtime is 600 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `50a15981a1fa <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=50a15981a1fa>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`min_mem_avail <tst_test>`
     - 10
   * -  :c:struct:`skip_in_compat <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_SWAP=y


.. raw:: html

    <hr>

symlink02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/symlink/symlink02.c>`__

Check the basic functionality of the symlink() system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

symlink04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/symlink/symlink04.c>`__

Check that a symbolic link may point to an existing file or
to a nonexistent one.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sync01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sync/sync01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sync_file_range01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sync_file_range/sync_file_range01.c>`__

Basic error conditions test for sync_file_range() system call, tests for:

- EBADFD Wrong filedescriptor
- ESPIPE Unsupported file descriptor
- EINVAL Wrong offset
- EINVAL Wrong nbytes
- EINVAL Wrong flags

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

sync_file_range02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sync_file_range/sync_file_range02.c>`__

Tests if sync_file_range() does sync a test file range with a many dirty pages
to a block device. Also, it tests all supported filesystems on a test block
device.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | fuse
       | ntfs
       | tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

syncfs01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/syncfs/syncfs01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - tmpfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

syscall01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/syscall/syscall01.c>`__

Basic test for syscall().

Compare raw get{g,p,u}id results with their glibc wrappers.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysctl01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysctl/sysctl01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysctl03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysctl/sysctl03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

sysctl04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysctl/sysctl04.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysfs01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysfs/sysfs01.c>`__

This test is run for option 1 for sysfs(2).
Translate the filesystem identifier string fsname into a filesystem type index.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysfs02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysfs/sysfs02.c>`__

This test is run for option 2 for sysfs(2).
Translate the filesystem type index fs_index into a null-terminated filesystem
identifier string. This string will be written to the buffer pointed to by buf.
Make sure that buf has enough space to accept the string.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysfs03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysfs/sysfs03.c>`__

This test is run for option 3 for sysfs(2).
Return the total number of filesystem types currently present in the kernel.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysfs04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysfs/sysfs04.c>`__

This test case checks whether sysfs(2) system call returns
appropriate error number for invalid option.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysfs05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysfs/sysfs05.c>`__

This test case checks whether sysfs(2) system call returns appropriate
error number for invalid option and for invalid filesystem name and fs index out of bounds.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

sysinfo03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/sysinfo/sysinfo03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `ecc421e05bab <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=ecc421e05bab>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TIME_NS=y
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

syslog11
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/syslog/syslog11.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/printk


.. raw:: html

    <hr>

syslog12
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/syslog/syslog12.c>`__

Verify that syslog(2) system call fails with appropriate error number:

1. EINVAL -- invalid type/command
2. EFAULT -- buffer outside program's accessible address space
3. EINVAL -- NULL buffer argument
4. EINVAL -- length argument set to negative value
5. EINVAL -- console level less than 0
6. EINVAL -- console level greater than 8
7. EPERM -- non-root user

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

tcindex01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/cve/tcindex01.c>`__

CVE-2023-1829

Test for use-after-free after removing tcindex traffic filter with certain
parameters.

Tcindex filter was removed in kernel v6.3:
8c710f75256b ("net/sched: Retire tcindex classifier")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `8c710f75256b <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8c710f75256b>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2023-1829 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-1829>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - dummy
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - | CONFIG_VETH
       | CONFIG_USER_NS=y
       | CONFIG_NET_NS=y
       | CONFIG_NET_SCH_HTB
       | CONFIG_NET_CLS_TCINDEX
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/user/max_user_namespaces


.. raw:: html

    <hr>

tee01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tee/tee01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tee02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tee/tee02.c>`__

Verify that, tee(2) returns -1 and sets errno to:

1. EINVAL if fd_in does not refer to a pipe.
2. EINVAL if fd_out does not refer to a pipe.
3. EINVAL if fd_in and fd_out refer to the same pipe.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tgkill01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tgkill/tgkill01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -t
     - Number of threads (default 10)


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tgkill02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tgkill/tgkill02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tgkill03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tgkill/tgkill03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

thp01
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/thp/thp01.c>`__

This is a reproducer of CVE-2011-0999, which fixed by mainline commit
a7d6e4ecdb76 ("thp: prevent hugepages during args/env copying into the user stack")

"Transparent hugepages can only be created if rmap is fully
functional. So we must prevent hugepages to be created while
is_vma_temporary_stack() is true."

It will cause a panic something like this, if the patch didn't get
applied:

```
kernel BUG at mm/huge_memory.c:1260!
invalid opcode: 0000 [#1] SMP
last sysfs file: /sys/devices/system/cpu/cpu23/cache/index2/shared_cpu_map
```

Due to commit da029c11e6b1 which reduced the stack size considerably, we
now perform a binary search to find the largest possible argument we can
use. Only the first iteration of the test performs the search; subsequent
iterations use the result of the search which is stored in some shared
memory.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a7d6e4ecdb76 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a7d6e4ecdb76>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2011-0999 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-0999>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

thp02
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/thp/thp02.c>`__

Test for detecting mremap bug when THP is enabled.

There was a bug in mremap THP support, sometimes causing crash
due to the following reason:

"alloc_new_pmd was forcing the allocation of a pte before calling
move_huge_page and that resulted in a VM_BUG_ON in move_huge_page
because the pmd wasn't zero."

There are 4 cases to test this bug:

1. old_addr hpage aligned, old_end not hpage aligned, new_addr
   hpage aligned

2. old_addr hpage aligned, old_end not hpage aligned, new_addr not
   hpage aligned

3. old_addr not hpage aligned, old_end hpage aligned, new_addr
   hpage aligned

4. old_addr not hpage aligned, old_end hpage aligned, new_addr not
   hpage aligned

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

thp03
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/thp/thp03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

thp04
-----

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/thp/thp04.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `a8f97366452e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=a8f97366452e>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `8310d48b125d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=8310d48b125d>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-1000405 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-1000405>`_




.. raw:: html

    <hr>

time01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/time/time01.c>`__

- Basic test for the time(2) system call. It is intended to provide a
limited exposure of the system call.
- Verify that time(2) returns the value of time in seconds since the Epoch
and stores this value in the memory pointed to by the parameter.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timens01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/timens/timens01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TIME_NS=y
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

timer_create01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_create/timer_create01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f18ddc13af98 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f18ddc13af98>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

timer_create02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_create/timer_create02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timer_create03
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_create/timer_create03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2017-18344 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-18344>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `cef31d9af908 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cef31d9af908>`_




.. raw:: html

    <hr>

timer_delete01
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_delete/timer_delete01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f18ddc13af98 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f18ddc13af98>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

timer_delete02
--------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_delete/timer_delete02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timer_getoverrun01
------------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_getoverrun/timer_getoverrun01.c>`__

This test checks base timer_getoverrun() functionality.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timer_gettime01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_gettime/timer_gettime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

timer_settime01
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_settime/timer_settime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f18ddc13af98 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f18ddc13af98>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `e86fea764991 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e86fea764991>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

timer_settime02
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_settime/timer_settime02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `f18ddc13af98 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f18ddc13af98>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

timer_settime03
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timer_settime/timer_settime03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `78c9c4dfbf8c <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=78c9c4dfbf8c>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2018-12896 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-12896>`_




.. raw:: html

    <hr>

timerfd01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

timerfd02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd02.c>`__

This test verifies that:
- TFD_CLOEXEC sets the close-on-exec file status flag on the new open  file
- TFD_NONBLOCK sets the O_NONBLOCK file status flag on the new open file

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timerfd04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_TIME_NS=y


.. raw:: html

    <hr>

timerfd_create01
----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd_create01.c>`__

This test verifies that:
- clockid argument is neither CLOCK_MONOTONIC nor CLOCK_REALTIME,
EINVAL would return.
- flags is invalid, EINVAL would return.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

timerfd_gettime01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd_gettime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

timerfd_settime01
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd_settime01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

timerfd_settime02
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/timerfd/timerfd_settime02.c>`__


Test timeout defaults is 30 seconds.
Maximum runtime is 150 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `1e38da300e1e <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=1e38da300e1e>`_
   * - :c:struct:`CVE <tst_tag>`
     - `2017-10661 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-10661>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W
   * -  :c:struct:`test_variants <tst_test>`
     - 3


.. raw:: html

    <hr>

times01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/times/times01.c>`__

This is a Phase I test for the times(2) system call.  It is intended to
provide a limited exposure of the system call.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

times03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/times/times03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tkill01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tkill/tkill01.c>`__

Basic tests for the tkill syscall.

**Algorithm**

Calls tkill and capture signal to verify success.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tkill02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/tkill/tkill02.c>`__

Basic tests for the tkill() errors.

**Algorithm**

- EINVAL on an invalid thread ID
- ESRCH when no process with the specified thread ID exists

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

truncate02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/truncate/truncate02.c>`__

Verify that:

- truncate(2) truncates a file to a specified length successfully.
- If the file is larger than the specified length, the extra data is lost.
- If the file is shorter than the specified length, the extra data is filled by '0'.
- truncate(2) doesn't change offset.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

truncate03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/truncate/truncate03.c>`__

Verify that:

- truncate(2) returns -1 and sets errno to EACCES if search/write
  permission denied for the process on the component of the path prefix
  or named file.
- truncate(2) returns -1 and sets errno to ENOTDIR if the component of
  the path prefix is not a directory.
- truncate(2) returns -1 and sets errno to EFAULT if pathname points
  outside user's accessible address space.
- truncate(2) returns -1 and sets errno to ENAMETOOLONG if the component
  of a pathname exceeded 255 characters or entire pathname exceeds 1023
  characters.
- truncate(2) returns -1 and sets errno to ENOENT if the named file
   does not exist.
- truncate(2) returns -1 and sets errno to EISDIR if the named file
  is a directory.
- truncate(2) returns -1 and sets errno to EFBIG if the argument length
  is larger than the maximum file size.
- truncate(2) returns -1 and sets errno to ELOOP if too many symbolic
  links were encountered in translating the pathname.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

tst_device
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_device.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tst_get_free_pids
-----------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_get_free_pids.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tst_ns_create
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_ns_create.c>`__

Creates a child process in the new specified namespace(s), child is then
daemonized and is running in the background. PID of the daemonized child
process is printed on the stdout. As the new namespace(s) is(are) maintained
by the daemonized child process it(they) can be removed by killing this
process.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tst_ns_exec
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_ns_exec.c>`__

Enters the namespace(s) of a process specified by a PID and then executes
the indicated program inside that namespace(s).

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tst_ns_ifmove
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_ns_ifmove.c>`__

Moves a network interface to the namespace of a process specified by a PID.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

tst_run_shell
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/lib/tst_run_shell.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`runs_script <tst_test>`
     - 1


.. raw:: html

    <hr>

uevent01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/uevents/uevent01.c>`__

Very simple uevent netlink socket test.

We fork a child that listens for a kernel events while parents attaches and
detaches a loop device which should produce two change events.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - loop
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

uevent02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/uevents/uevent02.c>`__

Very simple uevent netlink socket test.

We fork a child that listens for a kernel events while parents creates and
removes a tun network device which should produce two several add and remove
events.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_drivers <tst_test>`
     - tun
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

uevent03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/uevents/uevent03.c>`__

Very simple uevent netlink socket test.

We fork a child that listens for a kernel events while parents creates and
removes a virtual mouse which produces add and remove event for the device
itself and for two event handlers called eventX and mouseY.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - uinput
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

umask01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/umask/umask01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

umip_basic_test
---------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/security/umip/umip_basic_test.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_X86_INTEL_UMIP=y | CONFIG_X86_UMIP=y


.. raw:: html

    <hr>

umount01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/umount/umount01.c>`__

Check the basic functionality of the umount(2) system call.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

umount02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/umount/umount02.c>`__

Check for basic errors returned by umount(2) system call.

Verify that umount(2) returns -1 and sets errno to

1. EBUSY if it cannot be umounted, because dir is still busy.
2. EFAULT if specialfile or device file points to invalid address space.
3. ENOENT if pathname was empty or has a nonexistent component.
4. EINVAL if specialfile or device is invalid or not a mount point.
5. ENAMETOOLONG if pathname was longer than MAXPATHLEN.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

umount03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/umount/umount03.c>`__

Verify that umount(2) returns -1 and sets errno to EPERM if the user
is not the super-user.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

umount2_02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/umount2/umount2_02.c>`__

Test for feature MNT_EXPIRE of umount2():

- EINVAL when flag is specified with either MNT_FORCE or MNT_DETACH
- EAGAIN when initial call to umount2(2) with MNT_EXPIRE
- EAGAIN when umount2(2) with MNT_EXPIRE after access(2)
- succeed when second call to umount2(2) with MNT_EXPIRE

Test for feature UMOUNT_NOFOLLOW of umount2():

- EINVAL when target is a symbolic link
- succeed when target is a mount point

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

uname01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/uname/uname01.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

uname02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/uname/uname02.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

uname04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/uname/uname04.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`CVE <tst_tag>`
     - `2012-0957 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-0957>`_




.. raw:: html

    <hr>

unlink05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlink/unlink05.c>`__

Check the basic functionality of the unlink(2):

- unlink(2) can delete regular file successfully.
- unlink(2) can delete fifo file successfully.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

unlink07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlink/unlink07.c>`__

Verify that unlink(2) fails with

- ENOENT when file does not exist
- ENOENT when pathname is empty
- ENOENT when a component in pathname does not exist
- EFAULT when pathname points outside the accessible address space
- ENOTDIR when a component used as a directory in pathname is not,
in fact, a directory
- ENAMETOOLONG when pathname is too long

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

unlink08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlink/unlink08.c>`__

Verify that unlink(2) fails with

- EACCES when no write access to the directory containing pathname
- EACCES when one of the directories in pathname did not allow search
- EISDIR when deleting directory as root user
- EISDIR when deleting directory as non-root user

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

unlink09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlink/unlink09.c>`__

Verify that unlink(2) fails with EPERM when target file is marked as
immutable or append-only.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | fuse
       | exfat
       | vfat
       | ntfs
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

unlink10
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlink/unlink10.c>`__

Verify that unlink(2) fails with EROFS when target file is on a read-only
filesystem.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

unlinkat01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unlinkat/unlinkat01.c>`__

Basic unlinkat() test.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

unshare01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unshare/unshare01.c>`__

Basic tests for the unshare() syscall.

**Algorithm**

Calls unshare() for different CLONE_* flags in a child process and expects
them to succeed.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

unshare02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/unshare/unshare02.c>`__

Basic tests for the unshare(2) errors.

- EINVAL on invalid flags
- EPERM when process is missing required privileges

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

userfaultfd01
-------------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/userfaultfd/userfaultfd01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`min_kver <tst_test>`
     - 4.3


.. raw:: html

    <hr>

userns01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns01.c>`__

Verify that if a user ID has no mapping inside the namespace, user ID and
group ID will be the value defined in the file /proc/sys/kernel/overflowuid
(defaults to 65534) and /proc/sys/kernel/overflowgid (defaults to 65534). A
child process has a full set of permitted and effective capabilities, even
though the program was run from an unprivileged account.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`caps <tst_test>`
     - TST_CAP(TST_CAP_DROP,CAP_NET_RAW)


.. raw:: html

    <hr>

userns02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns02.c>`__

Verify that the user ID and group ID, which are inside a container,
can be modified by its parent process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns03.c>`__

Verify that /proc/PID/uid_map and /proc/PID/gid_map contains three values
separated by white space:

ID-inside-ns   ID-outside-ns   length

ID-outside-ns is interpreted according to which process is opening the file.

If the process opening the file is in the same user namespace as the process
PID, then ID-outside-ns is defined with respect to the parent user namespace.

If the process opening the file is in a different user namespace, then
ID-outside-ns is defined with respect to the user namespace of the process
opening the file.

The string "deny" would be written to /proc/self/setgroups before GID
check if setgroups is allowed, see kernel commits:

- 9cc46516ddf4 ("userns: Add a knob to disable setgroups on a per user namespace basis")
- 66d2f338ee4c ("userns: Allow setting gid_maps without privilege when setgroups is disabled")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns04.c>`__

Verify that if a namespace isn't another namespace's ancestor, the process in
first namespace does not have the CAP_SYS_ADMIN capability in the second
namespace and the setns() call fails.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns05.c>`__

Verify that if a process created via fork(2) or clone(2) without the
CLONE_NEWUSER flag is a member of the same user namespace as its parent.

When unshare an user namespace, the calling process is moved into a new user
namespace which is not shared with any previously existing process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns06.c>`__

Verify that when a process with non-zero user IDs performs an execve(),
the process's capability sets are cleared.
When a process with zero user IDs performs an execve(), the process's
capability sets are set.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`resource_files <tst_test>`
     - userns06_capcheck
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns07.c>`__

Verify that the kernel allows at least 32 nested levels of user namespaces.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`save_restore <tst_test>`
     - /proc/sys/kernel/unprivileged_userns_clone
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

userns08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/userns/userns08.c>`__

Reproducer of CVE-2018-18955; broken uid/gid mapping for nested
user namespaces with >5 ranges

See original reproducer and description by Jan Horn:
https://bugs.chromium.org/p/project-zero/issues/detail?id=1712

Note that calling seteuid from root can cause the dumpable bit to
be unset. The proc files of non dumpable processes are then owned
by (the real) root. So on the second level we reset dumpable to 1.


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d2f007dbe7e4 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d2f007dbe7e4>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2018-18955 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2018-18955>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_USER_NS
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/user/max_user_namespaces
       | /proc/sys/kernel/unprivileged_userns_clone
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

ustat01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ustat/ustat01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`known-fail <tst_tag>`
     - ustat() is known to fail with EINVAL on Btrfs, see https://lore.kernel.org/linux-btrfs/e7e867b8-b57a-7eb2-2432-1627bd3a88fb@toxicpanda.com/




.. raw:: html

    <hr>

ustat02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/ustat/ustat02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`known-fail <tst_tag>`
     - ustat() is known to fail with EINVAL on Btrfs, see https://lore.kernel.org/linux-btrfs/e7e867b8-b57a-7eb2-2432-1627bd3a88fb@toxicpanda.com/




.. raw:: html

    <hr>

utime01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime01.c>`__

Verify that the system call utime() successfully changes the last
access and modification times of a file to the current time if the
times argument is NULL and the user ID of the process is "root".

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utime02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime02.c>`__

Verify that the system call utime() successfully changes the last
access and modification times of a file to the current time,
under the following constraints:

- The times argument is NULL.
- The user ID of the process is not "root".
- The file is owned by the user ID of the process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utime03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime03.c>`__

Verify that the system call utime() successfully sets the modification
and access times of a file to the current time, under the following
constraints:

- The times argument is NULL.
- The user ID of the process is not "root".
- The file is not owned by the user ID of the process.
- The user ID of the process has write access to the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utime04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime04.c>`__

Verify that the system call utime() successfully changes the last
access and modification times of a file to the values specified by
times argument, under the following constraints:

- The times argument is not NULL.
- The user ID of the process is "root".

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utime05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime05.c>`__

Verify that the system call utime() successfully changes the last
access and modification times of a file to the values specified by
times argument, under the following constraints:

- The times argument is not NULL.
- The user ID of the process is not "root".
- The file is owned by the user ID of the process.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - | vfat
       | exfat
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utime06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime06.c>`__

Verify that system call utime() fails with

- EACCES when times argument is NULL and user does not have rights to modify
  the file.
- ENOENT when specified file does not exist.
- EPERM when times argument is not NULL and user does not have rights to
  modify the file.
- EROFS when the path resides on a read-only filesystem.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

utime07
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utime/utime07.c>`__

This test verifies that utime() is working correctly on symlink()
generated files.

Also verify if utime() fails with:

- ENOENT when symlink points to nowhere
- ELOOP when symlink is looping

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utimensat01
-----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utimensat/utimensat01.c>`__

Basic utimnsat() test.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`test_variants <tst_test>`
     - 3
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utimes01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/utimes/utimes01.c>`__

Verify that, utimes(2) returns -1 and sets errno to

1. EACCES if times is NULL, the caller's effective user ID does not match
the owner of the file, the caller does not have write access to the file,
and the caller is not privileged
2. ENOENT if filename does not exist
3. EFAULT if filename is NULL
4. EPERM if times is not NULL, the caller's effective UID does not match
the owner of the file, and the caller is not privileged
5. EROFS if path resides on a read-only file system

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_rofs <tst_test>`
     - 1


.. raw:: html

    <hr>

utsname01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/utsname/utsname01.c>`__

Clone two plain processes and check if both read the same hostname.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

utsname02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/utsname/utsname02.c>`__

Clone two plain processes, change hostname in the first one then check if
hostaname has changed inside the second one as well.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utsname03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/utsname/utsname03.c>`__

Clone two processes using CLONE_NEWUTS, change hostname from the first
container and check if hostname didn't change inside the second one.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

utsname04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/containers/utsname/utsname04.c>`__

Drop root privileges, create a container with CLONE_NEWUTS and verify that
we receive a permission error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Option
     - Description
   * - -m
     - Test execution mode <clone|unshare>


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

vhangup01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vhangup/vhangup01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

vhangup02
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vhangup/vhangup02.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1


.. raw:: html

    <hr>

vma05.sh
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/mem/vma/vma05.sh>`__

Regression test if the vsyscall and vdso VMA regions are reported correctly.

While [vsyscall] is mostly deprecated with newer systems, there is
still plenty of kernels compiled with CONFIG_LEGACY_VSYSCALL_NATIVE and
CONFIG_LEGACY_VSYSCALL_EMULATE (see linux/arch/x86/Kconfig for option
descriptions). First part of the test will check eligible kernels for
regression for a bug fixed by commit 103efcd9aac1 (fix perms/range of
vsyscall vma in /proc/*/maps).

Second part of test checks [vdso] VMA permissions (fixed with commits
b6558c4a2378 (fix [vdso] page permissions) and e5b97dde514f (Add
VM_ALWAYSDUMP)). As a consequence of this bug, VMAs were not included
in core dumps which resulted in eg. incomplete backtraces and invalid
core dump files created by gdb.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `103efcd9aac1 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=103efcd9aac1>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `b6558c4a2378 <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=b6558c4a2378>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `e5b97dde514f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=e5b97dde514f>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - True
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - True
   * -  :c:struct:`needs_cmds <tst_test>`
     - | gdb
       | uname
   * -  :c:struct:`save_restore <tst_test>`
     - | /proc/sys/kernel/core_pattern
       | /proc/sys/kernel/core_uses_pid


.. raw:: html

    <hr>

vmsplice01
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vmsplice/vmsplice01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1
   * -  :c:struct:`skip_filesystems <tst_test>`
     - nfs


.. raw:: html

    <hr>

vmsplice02
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vmsplice/vmsplice02.c>`__

Verify that, vmsplice(2) returns -1 and sets errno to:

- EBADF if fd is not valid.
- EBADF if fd doesn't refer to a pipe.
- EINVAL if nr_segs is greater than IOV_MAX.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`skip_filesystems <tst_test>`
     - nfs
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

vmsplice03
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vmsplice/vmsplice03.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

vmsplice04
----------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/vmsplice/vmsplice04.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

vsock01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/network/sockets/vsock01.c>`__

Reproducer of CVE-2021-26708

Based on POC https://github.com/jordan9001/vsock_poc.
Fuzzy Sync has been substituted for userfaultfd.

Fixed by: c518adafa39f ("vsock: fix the race conditions in multi-transport support")

Fixes: c0cfa2d8a788fcf4 ("vsock: add multi-transports support")

Note that in many testing environments this will reproduce the race
silently. For the test to produce visible errors the loopback
transport should be registered, but not the g2h or h2g transports.

One way to do this is to remove CONFIG_VIRTIO_VSOCKETS in the guest
or CONFIG_VHOST_VSOCK on the host. Or just unload the
modules. Alternatively run the test on a bare metal host which has
never started a VM.

Test timeout defaults is 30 seconds.
Maximum runtime is 60 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `c518adafa39f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c518adafa39f>`_
   * - :c:struct:`CVE <tst_tag>`
     - `CVE-2021-26708 <https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-CVE-2021-26708>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_kconfigs <tst_test>`
     - CONFIG_VSOCKETS_LOOPBACK
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

wait01
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/wait/wait01.c>`__

Check that if the calling process does not have any unwaited-for children
wait() will return ECHILD.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wait02
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/wait/wait02.c>`__

For a terminated child, test whether wait(2) can get its pid
and exit status correctly.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wait401
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/wait4/wait401.c>`__


Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wait402
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/wait4/wait402.c>`__

Check for ECHILD errno when call wait4(2) with an invalid pid value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wait403
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/wait4/wait403.c>`__

Check wait4(INT_MIN, ...) is not allowed. The pid is negated before
searching for a group with that pid. Negating INT_MIN is not
defined so UBSAN will be triggered if enabled. Also see kill13.

If the bug is present, but UBSAN is not enabled, then it should
result in ECHILD.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `dd83c161fbcc <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=dd83c161fbcc>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`taint_check <tst_test>`
     - TST_TAINT_W


.. raw:: html

    <hr>

waitid01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid01.c>`__

This test is checking if waitid() syscall does wait for WEXITED and check for
the return value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid02.c>`__

Tests if waitid() returns EINVAL when passed invalid options flag value.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid03.c>`__

Tests if waitid() syscall returns ECHILD when the calling process has no
child processes.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid04.c>`__

This test if waitid() syscall leaves the si_pid set to 0 with WNOHANG flag
when no child was waited for.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitid05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid05.c>`__

Tests if waitid() filters children correctly by the group ID.

- waitid() with GID + 1 returns ECHILD
- waitid() with GID returns correct data

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid06.c>`__

Tests if waitid() filters children correctly by the PID.

- waitid() with PID + 1 returns ECHILD
- waitid() with PID returns correct data

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid07.c>`__

Test if waitid() filters children killed with SIGSTOP.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitid08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid08.c>`__

Test if waitid() filters children killed with SIGCONT.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitid09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid09.c>`__

Test that waitid() fails with ECHILD with process that is not child of the
current process. We fork() one child just to be sure that there are unwaited
for children available while the test runs.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitid10
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid10.c>`__

This test is checking if waitid() syscall recognizes a process that ended
with division by zero error.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitid11
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitid/waitid11.c>`__

This test is checking if waitid() syscall recognizes a process that has been
killed with SIGKILL.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitpid01
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid01.c>`__

Check that when a child kills itself with one of the standard signals,
the waiting parent is correctly notified.

Fork a child that sends given signal to itself using raise() or kill(),
the parent checks that the signal was returned.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`test_variants <tst_test>`
     - 2
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid03
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid03.c>`__

Check that waitpid() returns the exit status of a specific child process
and repeated call on the same process will fail with ECHILD.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitpid04
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid04.c>`__

Test to check the error conditions in waitpid() syscall.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

waitpid06
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid06.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid07
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid07.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid08
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid08.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid09
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid09.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid10
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid10.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid11
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid11.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid12
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid12.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

waitpid13
---------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/waitpid/waitpid13.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

wqueue01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue01.c>`__

Test if keyctl update is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue02
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue02.c>`__

Test if keyctl unlink is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue03.c>`__

Test if keyctl revoke is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue04
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue04.c>`__

Test if keyctl link is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue05
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue05.c>`__

Test if keyctl invalidate is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue06
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue06.c>`__

Test if keyctl clear is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue07.c>`__

Test if keyctl setperm is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue08
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue08.c>`__

Test if key watch removal is correctly recognized by watch queue.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

wqueue09
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/watchqueue/wqueue09.c>`__

Fill the watch queue and wait for a notification loss.

Test timeout defaults is 30 seconds.




.. raw:: html

    <hr>

write01
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

write02
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write02.c>`__

Tests for a special case NULL buffer with size 0 is expected to return 0.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

write03
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write03.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

write04
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write04.c>`__

Verify that write(2) fails with errno EAGAIN when attempt to write to fifo
opened in O_NONBLOCK mode.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

write05
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write05.c>`__

Check the return value, and errnos of write(2)

- when the file descriptor is invalid - EBADF
- when the buf parameter is invalid - EFAULT
- on an attempt to write to a pipe that is not open for reading - EPIPE

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

write06
-------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/write/write06.c>`__

Test the write() system call with O_APPEND.

The full description of O_APPEND is in open(2) man-pages:
The file is opened in append mode.  Before each write(2), the
file offset is positioned at the end of the file, as if with lseek(2).
The modification of the file offset and the write operation are
performed as a single atomic step.

Writing 2k data to the file, close it and reopen it with O_APPEND.
Verify that the file size is 3k and offset is moved to the end of the file.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

writev01
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/writev/writev01.c>`__


Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

writev03
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/writev/writev03.c>`__

Check for potential issues in writev() if the first iovec entry is NULL
and the next one is not present in RAM. This can result in a brief window
where writev() first writes uninitialized data into the file (possibly
exposing internal kernel structures) and then overwrites it with the real
iovec contents later.

Test timeout defaults is 30 seconds.
Maximum runtime is 75 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `d4690f1e1cda <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=d4690f1e1cda>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`mount_device <tst_test>`
     - 1
   * -  :c:struct:`all_filesystems <tst_test>`
     - 1
   * -  :c:struct:`min_cpus <tst_test>`
     - 2
   * -  :c:struct:`format_device <tst_test>`
     - 1
   * -  :c:struct:`needs_device <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

writev07
--------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/syscalls/writev/writev07.c>`__

Verify writev() behaviour with partially valid iovec list.
Kernel <4.8 used to shorten write up to first bad invalid
iovec. Starting with 4.8, a writev with short data (under
page size) is likely to get shorten to 0 bytes and return
EFAULT.

This test doesn't make assumptions how much will write get
shortened. It only tests that file content/offset after
syscall corresponds to return value of writev().

See: [RFC] writev() semantics with invalid iovec in the middle
https://marc.info/?l=linux-kernel&m=147388891614289&w=2.

This is also regression test for kernel commits:

* 20c64ec83a9f ("iomap: fix a regression for partial write errors")
* 3ac974796e5d ("iomap: fix short copy in iomap_write_iter()")

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Tag
     - Info
   * - :c:struct:`linux-git <tst_tag>`
     - `20c64ec83a9f <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=20c64ec83a9f>`_
   * - :c:struct:`linux-git <tst_tag>`
     - `3ac974796e5d <https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=3ac974796e5d>`_


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>

zram03
------

`source <https://github.com/linux-test-project/ltp/tree/master/testcases/kernel/device-drivers/zram/zram03.c>`__

zram: generic RAM based compressed R/W block devices
http://lkml.org/lkml/2010/8/9/227

This case check whether data read from zram device is consistent with
thoese are written.

Test timeout defaults is 30 seconds.


.. list-table::
   :header-rows: 1

   * - Key
     - Value
   * -  :c:struct:`needs_drivers <tst_test>`
     - zram
   * -  :c:struct:`needs_cmds <tst_test>`
     - | modprobe
       | rmmod
   * -  :c:struct:`needs_root <tst_test>`
     - 1
   * -  :c:struct:`needs_tmpdir <tst_test>`
     - 1


.. raw:: html

    <hr>
