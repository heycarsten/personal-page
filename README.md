# Carsten’s Page

Time for a new personal page 🙂

## Index

Intro:

Hi, I’m Carsten 👋🏼

I’m a lead software developer specializing in web applications and related technologies, I’m all about collaboration. I try to be as open and honest about what I don’t know as I can be. I am a curious human and I love to learn 🙂

## Tools and processes

I’ve been programming professionally for over a decade. My career started with Microsoft ASP 2.0, hacking on VBScript and Access Data Objects. From there I discovered PHP and open source software. This lead me to Python through Django and eventually to Ruby, Rails, and beyond.

During this time I attempted to get into design school twice ([YSDN](https://en.m.wikipedia.org/wiki/York/Sheridan_Design)). I could never make it past the interview, too little applicable education, and a brutally weak portfolio. I kept persisting though, developing my design eye and related skills in tandem with web development. Reading as much literature on the subject that I could get my hands on, online, at the library, and book stores.

I guess you’d say I’m a Full Stack Developer. Now that you know a little bit about how I got to where I am, I’m going to share with you the tools that I use to perform my various roles as a software developer.

These preferences I have developed over time, based on my experiences and requirements, also my privilege. Some of these things are expensive, and I’m fortunate enough to be able to afford them or be provided them by my workplace. This is not intended to convince you what I have chosen is the best or better. You may have different preferences based on your own requirements, that’s a good thing! These tools and processes are constantly changing and evolving.

If you have any feedback for me on any of this stuff, feel free to hit me up on [Twitter](https://twitter.com/heycarsten) or send me an email: heycarsten 🌀 gmail 🌎 com

### MacBook Pro 15’’ (1st gen TouchBar)

This is my company issued laptop (thanks [Crowdmark](https://crowdmark.com)), it is also my choice of laptop. I would own this exact computer regardless of my workplace or not. I like Apple hardware, I like how well they support their products, I like that they take security, reliability, and ease of use seriously. My experience with Apple products since 2006 has been overwhelmingly positive.

In the fall I had an issue with the keyboard sticking, I took it in and they replaced the entire keyboard, battery, and TouchBar, no questions asked. Since then I have had zero issues, and the keyboard feels even better.

### iPhone X

When I was first diagnosed with lymphoma, my friend Jamie Gilgen rallied the cycling community and gathered enough money to buy me a much needed new phone! Amazing. I’m still in awe of all of the generosity I have received. This made me realize just how important phones have become in our lives. They are a communications and productivity tool. Any time I see a way to remove friction by changing tools or processes and I am able to act on it, I do.

My previous phone (an iPhone 5) was fine, it functioned. But when I upgraded to a modern, fast phone it was stunning how much smoother it made everything. With a good phone you can do so much!

### iPad Pro

I have always thought of tablets as sort of a frivolous thing, useful, but also not really necessary. I don’t think that anymore. During my time sitting in chairs hooked up to IV pumps, I pulled the trigger and got an iPad. It was great! I could watch YouTube, do emails, play games, Facebook, all that good stuff so easily, without toting a 15’’ laptop everywhere. I also find the tablet incredibly useful as a writing tool, some of my fave apps:

- iA Writer: Awesome writing tool with Markdown support
- Working Copy: Great app for interacting with Git repos
- GoCoEdit: Great text editor for code and can SSH too

All those apps work on the iPhone too and I've used them all on there too. I also really enjoy fronted dev on the iPad with Safari and remote dev tools. It works really well and makes interactively developing UIs on touch a lot nicer.

### VirtualBox

I’ve also used VMware Fusion for many years, it’s good. It works well, but it’s not free and I just don’t think it’s worth the cost given how good VirtualBox is these days. In the past I had all of my development environments in VMs managed with Vagrant. These days I’m using Docker.

### Docker for Mac (Docker Desktop)

Docker and Docker Compose make creating and running development environments a breeze. You also gain the advantage of being able to apply a lot of these learnings directly to a production environment. These days with Docker Desktop the performance and stability of Docker is satisfactory or beyond satisfactory for my needs. _Shout-out to my lad [Aanand](http://aanandprasad.com/cv/), good friend and co-creator of Docker Compose!_

### Visual Studio Code

Oh, text editors. I have used a number of editors over the years, you name it, if it’s somewhat popular, I’ve probably tried it. Notepad+ back in my Windows days, TextMate 1 and 2, Coda, Sublime Text 2 and 3, Atom, vim, MacVim, NeoVim, Spacemacs, and Visual Studio Code.

These days I do 80% of my coding and writing in Visual Studio Code, it works fantastically. The ecosystem of extensions is incredibly rich and diverse, and often very high quality too. It works great for any project I am working on, and VS Code Live is a godsend for pairing. It’s a very powerful programming environment and is also incredibly accessible to newcomers. It even works really well on Linux.

I really like the Material Dark theme, I’ve always preferred dark themes, I find them less fatiguing. I set a visible gutter to 80 columns and keep my code within that boundary. I use spaces for indentation, defaulting to 2 spaces. I’ll change that depending on the project, but that’s my default. I also enable show trailing white spaces. I use the Source Code Pro typeface at 15pt.

### Git / GitHub

However you decide to store your source repositories, I feel it’s super important to use some form of version control. When I started my career Subversion was the standard, around 2007-2008 I learned about Git and was sold on it immediately. I also really like GitHub, I have been using it since it launched and continue to be a satisfied customer.

### iTerm2 / Terminal

For about 5 years now I have been using zsh as my shell, with the help of Oh-My-ZSH. I still really like it a lot. I had a brief time with Hyper a year or so ago and I liked it but it just wasn’t quite for me at the time. I look forward to seeing how it has progressed since then. I think there is a lot of room for improvement in CLI interfaces and shells!

### Chrome / Safari

I tend to use Chrome on my desktop environment (macOS) and Safari on my touch devices (iOS). Firefox is also really great on macOS, but I just don't find myself using it very often. Developer Tools in Chrome are still my preference, but Safari is a close second.

### Homebrew

Installing command-line software on your host computer (directly on your laptop) can be a messy thing. Package managers like Homebrew attempt to solve this problem, and Homebrew does a pretty good job! I have also used MacPorts but never went back after switching to Homebrew a number of years ago.

### Ansible

At a time I was just happy to get a server running my code! Over time, I saw shortcomings in my processes. Manually building servers, became manually provisioning VPSes on Linode and AWS EC2. That then became a step-by-step [guide](https://gist.github.com/heycarsten/7230affa5b399a84e02e). Which then became a shell script, that then became a [CLI tool](https://github.com/heycarsten/propro) for building and deploying shell scripts. That became a series of [Ansible Playbooks](https://github.com/heycarsten/propro-ansible) (no longer maintained) for provisioning and configuring servers.

These days I still use Ansible, but not as often for configuring servers and development environments since I use Docker for that. It’s a great tool for automating systems administration tasks.

### pyenv / rvm / nvm

For running and installing Python, Ruby, and Node directly on my host machine, I use their respective version managers so that I can easily toggle between versions for different projects. I can also easily “implode” an environment and bring it back up if I need to. I prefer this method over installing specific versions of programming tools directly on my machine. 

### SSH

I use public key authentication exclusively for accessing remote systems. I rotate my private key usually every few years, I should maybe get on that more often 🤔

### 1Password

There are numerous password managers these days, iCloud has a built in one even, but I love 1Password. It integrates on all of my devices, I can store other info in my vaults, not just login information. I also have a family plan so Erin and I can share logins for various shared stuff, along with our own personal vaults. 1Password integrates well virtually everywhere, and makes it dead easy to have a unique strong password for every account.

Before I started using a password manager I was the doing the "one password" thing, as in I had one password I used for everything! 😂 Not a good idea. I'm lucky, to my knowledge nothing important was ever breached, but I don't do that anymore.

### _Other notes_

I do not have an external monitor at the moment, I plan to get one in the future when I am able.

I have not included “tech stack” stuff here: programming languages, frameworks, libraries. This stuff is forever in flux, sure I have my core knowledge of Ruby, JavaScript, Rails, Ember, Node, Python, etc. but I'm also interested in Rust, Elixir, TypeScript, React, Elm, Go, and beyond. I consider it my job to be open to working with any technology under the right circumstances.

