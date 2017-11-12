webpackJsonp([884212097947],{"./node_modules/json-loader/index.js!./.cache/json/en-blog-linux-arch-install-arch-linux-wifi-xfce-4.json":function(n,a){n.exports={data:{markdownRemark:{fileAbsolutePath:"/home/angeloocana/dev/angeloocana/src/pages/blog/linux/arch/install-arch-linux-wifi-xfce4.en.md",html:'<p>If you want to learn Linux for real, Arch is my favorite distribution, be prepared for lots of commands and research, but keep calm, you are goin to learn!</p>\n<h2>Boot Arch Linux from USB pendrive</h2>\n<h3>Download Arch Linux</h3>\n<p>Download the .iso image at:\n<a href="https://www.archlinux.org/download/">https://www.archlinux.org/download/</a></p>\n<h3>Download Rufus</h3>\n<p>Rufus is a program to create bootable USB drivers\n<a href="https://rufus.akeo.ie/">https://rufus.akeo.ie/</a></p>\n<p>Open rufus, select your .iso image, select your pendrive and BURN!</p>\n<p>Boot your PC using your new pendrive and follow the next steps!</p>\n<p>Have fun!</p>\n<h2>Change keyboard to abnt2</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    loadkeys br-abnt2\n</code></pre>\n      </div>\n<h2>Show particions</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>fdisk -l</code></pre>\n      </div>\n<h2>Create Partitions</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">cfdisk</span>\n</code></pre>\n      </div>\n<h2>Format Partitions</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    mkfs.ext4 /dev/sda1\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    mkswap /dev/sda2\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    swapon /dev/sda2\n</code></pre>\n      </div>\n<h2>Install Arch</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">mount</span> /dev/sda1 /mnt\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    pacstrap /mnt base base-devel\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    genfstab /mnt <span class="token operator">>></span> /mnt/etc/fstab\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">cat</span> /mnt/etc/fstab\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    arch-chroot /mnt /bin/bash\n</code></pre>\n      </div>\n<h2>Enable internet</h2>\n<p>Enable dhcpcd for system start up.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    systemctl <span class="token function">enable</span> dhcpcd\n</code></pre>\n      </div>\n<p>Set your hostname, replace <strong>YOUR<em>HOSTNAME</em>HERE</strong> with your new machine name, in my case <strong>ocana-note</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token keyword">echo</span> YOUR_HOSTNAME_HERE <span class="token operator">></span> /etc/hostname\n</code></pre>\n      </div>\n<h2>Set password</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">passwd</span>\n</code></pre>\n      </div>\n<h2>Enable 32bit packages</h2>\n<p>uncomment multilib line from:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">nano</span> /etc/pacman.conf\n</code></pre>\n      </div>\n<h2>Sincronize  Repos</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    pacman -Sy\n</code></pre>\n      </div>\n<h2>Create User</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">useradd</span> -m -g <span class="token function">users</span> -G wheel,storage,power -s /bin/bash angeloocana\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">passwd</span> angeloocana\n</code></pre>\n      </div>\n<h1>Install sudo</h1>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    pacman -S <span class="token function">sudo</span>\n</code></pre>\n      </div>\n<p>enable sudo for users, uncomment %wheel ALL=(ALL) ALL</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    EDITOR<span class="token operator">=</span>nano visudo\n</code></pre>\n      </div>\n<h2>Grub installation</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    pacman -S grub os-prober\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    grub-install /dev/sda\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    grub-mkconfig -o /boot/grub/grub.cfg\n</code></pre>\n      </div>\n<h2>Exit</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token keyword">exit</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>     <span class="token function">umount</span> /mnt/home\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">umount</span> /mnt\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    poweroff\n</code></pre>\n      </div>\n<p>Remove the pendrive running the arch image and start your machine to continue the process.</p>\n<h2>Install xfce4</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -Syu\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S xorg xorg-server\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S xfce4 xfce4-goodies\n</code></pre>\n      </div>\n<p>Run xfce!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    startxfce4\n</code></pre>\n      </div>\n<h2>Change keyboard to abnt2 permanently</h2>\n<p>Go to ‘Applications’ -> ‘Settings’ -> ‘Settings Manager’ -> ‘Session and Startup’ -> ‘Application Autostart’ then click ‘Add’ button and just paste the command in the “Command” field, give a name and here you go.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    setxkbmap -model abnt2 -layout br -variant abnt2\n</code></pre>\n      </div>\n<h2>Datetime</h2>\n<p>To check the current zone defined for the system:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    timedatectl\n</code></pre>\n      </div>\n<p>To list available zones:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    timedatectl list-timezones\n</code></pre>\n      </div>\n<p>To change your time zone:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    timedatectl set-timezone Zone/SubZone   \n</code></pre>\n      </div>\n<p>Synchronize date time, maybe you have to restart to see the changes:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> hwclock --systohc --utc\n</code></pre>\n      </div>\n<h2>Audio</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S alsa-utils pulseaudio\n</code></pre>\n      </div>\n<h1>Programs</h1>\n<h2>Vim</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S vim\n</code></pre>\n      </div>\n<h2>Yaourt</h2>\n<p>Yaourt contains the community packages.</p>\n<p>For pacman always use sudo, for yaourt never!!!</p>\n<p>Open the file below for editing:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> vim /etc/pacman.conf\n</code></pre>\n      </div>\n<p>Add to the bottom:</p>\n<div class="gatsby-highlight">\n      <pre class="language-conf"><code>    [archlinuxfr]\n    SigLevel = Never\n    Server = http://repo.archlinux.fr/$arch</code></pre>\n      </div>\n<p>Install yaourt</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -Sy yaourt\n</code></pre>\n      </div>\n<h1>Wifi</h1>\n<p>Install NetworkManager\n<a href="https://wiki.archlinux.org/index.php/NetworkManager#Installation">https://wiki.archlinux.org/index.php/NetworkManager#Installation</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    <span class="token function">sudo</span> pacman -S networkmanager network-manager-applet xfce4-notifyd gnome-keyring\n</code></pre>\n      </div>\n<p>Maybe you need to restart to work properly.</p>\n<p>Enable Network Manager:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    systemctl <span class="token function">enable</span> NetworkManager.service\n</code></pre>\n      </div>\n<p>Start Network Manager:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    systemctl start NetworkManager.service\n</code></pre>\n      </div>\n<h1>Troubleshooting</h1>\n<h2>Fix audio</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>    alsactl restore\n</code></pre>\n      </div>\n<h2>Links</h2>\n<ul>\n<li><a href="https://www.ostechnix.com/install-arch-linux-latest-version/">https://www.ostechnix.com/install-arch-linux-latest-version/</a></li>\n</ul>',excerpt:"If you want to learn Linux for real, Arch is my favorite distribution, be prepared for lots of commands and research, but keep calm, you are...",fields:{tagSlugs:[{tag:"Linux",link:"/en/tags/linux/"},{tag:"Arch",link:"/en/tags/arch/"}],slug:"/en/blog/linux/arch/install-arch-linux-wifi-xfce4/",readNextPosts:[{excerpt:"Enable Auto Complete, Commit with title and description, create alias, navigate history, update fork and more! Enable Auto Complete while...",frontmatter:{title:"Advanced Git commands",date:"2017-06-23"},fields:{slug:"/en/blog/git/git-setup/",langKey:"en"}},{excerpt:"Is your Android mobile FULL? Backup your data to your Arch Linux.\nIt is easy following my steps (I hope hahaha).\nI had some trouble with...",frontmatter:{title:"Access and Backup Android Files and Photos",date:"2017-08-28"},fields:{slug:"/en/blog/linux/arch/backup-android-files/",langKey:"en"}},{excerpt:"Yaourt is the community packager manager for Arch Linux. When you are using  pacman  (official packager manager), you do need to use  sudo...",frontmatter:{title:"How to install Yaourt on Arch linux",date:"2017-08-26"},fields:{slug:"/en/blog/linux/arch/install-yaourt/",langKey:"en"}}]},frontmatter:{youtubeId:null,title:"Install Arch linux + wifi and xfce4",tags:["Linux","Arch"],date:"2017-08-12",structuredData:null}}},pathContext:{path:"/en/blog/linux/arch/install-arch-linux-wifi-xfce4/",langKey:"en"}}}});
//# sourceMappingURL=path---en-blog-linux-arch-install-arch-linux-wifi-xfce-4-4d94f41e70db3ca048f1.js.map