RMAN> BACKUP AS BACKUPSET DATABASE
Starting backup at 10-AUG-13
using target database control file instead of recovery catalog
allocated channel: ORA_DISK_1
channel ORA_DISK_1: sid=193 devtype=DISK
allocated channel: ORA_DISK_2
channel ORA_DISK_2: sid=192 devtype=DISK
channel ORA_DISK_1: starting full datafile backupset
channel ORA_DISK_1: specifying datafile(s) in backupset
input datafile fno=00025 name=/u03/oradata/devdb/devuser07.dbf
input datafile fno=00003 name=/u02/oradata/devdb/temp01.dbf
channel ORA_DISK_1: starting piece 1 at 10-AUG-13
channel ORA_DISK_2: starting full datafile backupset
channel ORA_DISK_2: specifying datafile(s) in backupset
input datafile fno=00008 name=/u03/oradata/devdb/devusers05.dbf
channel ORA_DISK_2: starting piece 1 at 10-AUG-13
...
..

piece handle=/backup/rman/full_4dogpd0u_4237_1 tag=TAG20130808T114846 comment=NONE
channel ORA_DISK_1: backup set complete, elapsed time: 00:00:03
Finished backup at 10-AUG-13
...
Starting Control File and SPFILE Autobackup at 10-AUG-13
piece handle=/backup/rman/ctl_c-758818131-20130808-00 comment=NONE
Finished Control File and SPFILE Autobackup at 10-AUG-13
