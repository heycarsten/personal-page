---
author: Carsten Nielsen
authorId: heycarsten
categories:
  - tooling
  - process
  - bio
date: '2018-12-30'
slug: my-tools-and-processes
title: My Tools and Processes
---

# My Tools and Processes

I’ve been programming professionally for over a decade. My career started with [Microsoft ASP 2.0](https://en.m.wikipedia.org/wiki/Active_Server_Pages), hacking on [VBScript](https://en.m.wikipedia.org/wiki/VBScript) and [ActiveX Data Objects](https://en.m.wikipedia.org/wiki/ActiveX_Data_Objects). From there I discovered [PHP](https://en.m.wikipedia.org/wiki/PHP) and [open source software](https://en.m.wikipedia.org/wiki/Open-source_software). This lead me to [Python](https://www.python.org) through [Django](https://www.djangoproject.com) and eventually to [Ruby](https://www.ruby-lang.org/en/) through [Rails](https://rubyonrails.org).

During this time I attempted to get into design school twice ([YSDN](https://en.m.wikipedia.org/wiki/York/Sheridan_Design)). I could never make it past the interview, too little applicable education, and a brutally weak portfolio. I kept persisting though, developing my design eye and related skills in tandem with web development. Reading as much literature on the subject that I could get my hands on, online, at the library, and book stores.

I guess you’d say I’m a [Full Stack Developer](https://hackernoon.com/what-is-a-full-stack-developer-in-2018-and-how-to-become-one-ca82e8906c87). To be honest, I’m not entirely comfortable with the concept, it’s impossible to be truly “all knowing” about the “full stack” because it means so many different things depending on the context.

Anyways, now that you know a little bit about how I got to where I am, I’m going to share with you the tools that I use to perform my various roles as a software developer.

These preferences I have developed over time, based on my experiences and requirements, also my privilege. Some of these things are expensive! I’m fortunate enough to be able to afford them or be provided them by my workplace. This is not intended to convince you that my preferences are the best or that they should be your preferences too. You may have different needs based on your own requirements, experience, and budget, that’s a good thing!

My tools and processes are also constantly changing and evolving. If you have any feedback for me on any of this stuff, feel free to hit me up on [Twitter](https://twitter.com/heycarsten) or send me an email: heycarsten@gmail.com

## [MacBook Pro 15’’ (1st gen TouchBar)](https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i7-2.9-15-late-2016-retina-display-touch-bar-specs.html)

This is my company issued laptop (thanks [Crowdmark](https://crowdmark.com)), it is also my choice of laptop. I would own this exact computer regardless of my workplace or not. I like Apple hardware, I like how well they support their products, I like that they take privacy, security, reliability, and ease of use seriously. My experience with Apple products since 2006 has been overwhelmingly positive.

_In the fall of 2018 I had an issue with the keyboard sticking, I took it in and they replaced the entire keyboard, battery, and TouchBar, no questions asked. Since then I have had zero issues, and the keyboard feels even better._

## [iPhone X](https://support.apple.com/kb/SP770?locale=en_CA)

When I was first diagnosed with lymphoma, my friend [Jamie Gilgen](https://en.m.wikipedia.org/wiki/Jamie_Gilgen) rallied the cycling community and gathered enough money to buy me a much needed new phone! Amazing. I’m still in awe of all of the generosity I have received. This made me realize just how important my phone has become in my life. It is a vital communications and productivity tool and an intergral part of my modern life.

My previous phone (an iPhone 5) was fine, it functioned. But when I upgraded to a modern, fast phone it was stunning how much smoother it made everything. With a good phone I can do so much! Whenever I see a way to remove friction by changing tools or processes and I am able to act on it, I do. I didn't realize that my outdated phone was adding so much friction to my day.

## [iPad Pro](https://support.apple.com/kb/SP762?locale=en_CA)

I have always thought of tablets as sort of a frivolous thing, useful, but also not really necessary. I don’t think that anymore. During my time sitting in chairs hooked up to IV pumps, I pulled the trigger and got an iPad. It was great! I could watch YouTube, do emails, play games, Facebook, all that good stuff so easily, without toting a 15’’ laptop everywhere. I also find the tablet incredibly useful as a writing tool, some of my fave apps:

- [iA Writer](https://ia.net/writer): Awesome writing tool with Markdown support
- [Working Copy](https://workingcopyapp.com): Great app for interacting with Git repos
- [GoCoEdit](https://gocoedit.app): Great text editor for code and can SSH too

All those apps work on the iPhone as well and I've used them all on there too. I also really enjoy fronted dev on the iPad with Safari using the remote inspector / dev tools. It works really well and makes interactively developing UIs on an actual touch device a lot nicer. (Try simulating a stylus on your XCode simulator 😩)

## [VirtualBox](https://www.virtualbox.org)

I’ve also used [VMware Fusion](https://www.vmware.com/ca/products/fusion.html) for many years. It’s good, it works well, but it’s not free and I just don’t think it’s worth the cost given how good VirtualBox is these days. In the past I had all of my development environments in VMs managed with Vagrant, these days I’m using Docker for that mostly. These days I find myself using Virtual Box mostly for testing things in Windows using Microsoft's [free VM images](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/).

## [Docker Desktop](https://www.docker.com/products/docker-desktop)

[Docker](https://docs.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/overview/) make creating and running development environments a breeze. You also gain the advantage of being able to apply a lot of these learnings directly to production environments, and [CI](https://circleci.com/continuous-integration/) too! These days with Docker Desktop the performance and stability of Docker is satisfactory or beyond satisfactory for my needs.

_Shout-out to my lad [Aanand](http://aanandprasad.com/cv/), good friend and co-creator of Docker Compose!_

## [Visual Studio Code](https://code.visualstudio.com)

Oh, text editors. I have used a number of editors over the years, you name it, if it’s somewhat popular, I’ve probably tried it. [Notepad+](https://en.m.wikipedia.org/wiki/Notepad%2B) back in my Windows days, [TextMate](https://macromates.com) 1 and 2, [Coda](https://panic.com/coda/), [Sublime Text](https://www.sublimetext.com) 2 and 3, [Atom](https://atom.io), [vim](https://www.vim.org), [MacVim](https://macvim-dev.github.io/macvim/), [NeoVim](https://neovim.io), [Spacemacs](http://spacemacs.org), and over the past couple years Visual Studio Code.

These days I do 80% of my coding and writing in Visual Studio Code, it works fantastically! The ecosystem of extensions is incredibly rich and diverse, and often very high quality too. It works great for any project I am working on, and [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) is a godsend! Collaboration and learning through pairing is becoming very important to me. It's exciting because I now have an editing and programming environment that's very powerful and is also incredibly accessible to newcomers. [Tmate](https://tmate.io) is excellent, and I have used tmate for years and will continue to. But terminal-based sharing can be daunting for someone new to programming or pairing in general.

I really like the [Material Dark](https://material-theme.site) theme, I’ve always preferred dark themes, I find them less visually fatiguing. I set a visible gutter to 80 columns and keep my code within that boundary. I use spaces for indentation, defaulting to 2 spaces. I’ll change that depending on the project, but that’s my default. I also enable show trailing white spaces. I use the [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro) font set in the Regular typeface at 15pt.

## [Git](https://git-scm.com) / [GitHub](https://github.com)

However you decide to store your source repositories, I feel it’s super important to use some form of version control. When I started my career [Subversion](https://en.m.wikipedia.org/wiki/Apache_Subversion) was the standard, around 2007-2008 I learned about Git and was sold on it immediately. I also really like GitHub, I have been using it since it launched and continue to be a satisfied customer.

## [iTerm2](https://www.iterm2.com)

For about 5 years now I have been using [Z shell](https://en.m.wikipedia.org/wiki/Z_shell) (zsh), with the help of [Oh My ZSH](https://ohmyz.sh). I still really like it a lot. I had a brief time with [Hyper](https://hyper.is) a year or so ago and I liked it but it just wasn’t quite for me at the time. I look forward to seeing how it has progressed since then. I think there is a lot of room for improvement in CLI interfaces and shells!

## [Chrome](https://www.google.com/chrome/) / [Safari](https://www.apple.com/ca/safari/)

I tend to use Chrome on my desktop environment (macOS) and Safari on my touch devices (iOS). [Firefox](https://www.mozilla.org/en-US/firefox/new/) is also really great on macOS, but I just don't find myself using it very often. [Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) in Chrome are still my preference, but Safari is a close second.

## [Homebrew](https://brew.sh)

Installing command-line software on your host computer (directly on your laptop) can be a messy thing. Package managers like Homebrew attempt to solve this problem, and Homebrew does a pretty good job! I have also used [MacPorts](https://www.macports.org) but never went back after switching to Homebrew a number of years ago.

## [Ansible](https://www.ansible.com/resources/get-started)

At a time I was just happy to get a server running my code! Over time, I saw shortcomings in my processes. Manually building servers, became manually provisioning VPSes on Linode and AWS EC2. That then became a step-by-step [guide](https://gist.github.com/heycarsten/7230affa5b399a84e02e). Which then became a shell script ([bash](https://en.m.wikipedia.org/wiki/Bash_(Unix_shell))), that then became a [CLI tool](https://github.com/heycarsten/propro) for building and deploying shell scripts. That became a series of [Ansible Playbooks](https://github.com/heycarsten/propro-ansible) (no longer maintained) for provisioning and configuring servers.

These days I still use Ansible, but not as often for configuring server dependencies and software or for provisioning development environments, I use Docker for that now. It’s a great tool for automating systems administration tasks.

## [pyenv](https://github.com/pyenv/pyenv) / [rbenv](https://github.com/rbenv/rbenv) / [nvm](https://github.com/creationix/nvm)

For running and installing [Python](https://www.python.org), [Ruby](https://www.ruby-lang.org/en/), and [Node](https://nodejs.org/en/) directly on my host machine, I use their respective version managers so that I can easily toggle between versions for different projects. I can also easily "implode" an environment and bring it back up if I need to. I prefer this method over installing specific versions of programming tools directly on my machine.

## [SSH](https://en.m.wikipedia.org/wiki/Secure_Shell) / [Mosh](https://mosh.org)

I use [public key authentication](https://www.linode.com/docs/security/authentication/use-public-key-authentication-with-ssh/) exclusively for accessing remote systems. I rotate my private key usually every few years, I should maybe get on that more often 🤔

## [Affinity Designer](https://affinity.serif.com/en-gb/designer/desktop/) / [Pixelmator Pro](https://www.pixelmator.com/pro/)

Probably like most designy folk out there, I started with Adobe Photoshop and Illustrator. Years ago I decided to give Pixelmator a try instead of Photoshop, I’m still using it today. Affinity Designer followed as a replacement for Illustrator, it also has a companion iPad app.

Even if you don’t "create" with these apps, you might find if you do any sort of frontend development that touches HTML / CSS they come in handy. Resizing images, resampling images, rasterizing SVG files, converting Illustrator files to SVG for use on the web, etc.

## [Things 3](https://culturedcode.com/things/)

I’ve been using Things for years, it’s essentially a to-do list and reminders app. It fits in seamlessly to my workflow, I use it on my iPad, iPhone, and on my desktop. I can also share tasks with Erin via Apple Reminders. It’s my preference for managing all of the little things that come at me, that I can’t get to immediately.

## [1Password](https://1password.com)

There are numerous password managers these days, iCloud has a built-in one even, but I love 1Password. It integrates on all of my devices, I can store other info in my vaults, not just login information. I also have a family plan so Erin and I can share logins for various shared stuff, along with our own personal vaults. 1Password integrates well virtually everywhere, and makes it dead easy to have a unique strong password for every account.

Before I started using a password manager I was the doing the "one password" thing the wrong way, as in I had one password I used for everything! 😂 Not a good idea. I'm lucky, to my knowledge nothing important was ever breached, but I don't do that anymore!

## _Other notes_

I do not have an external monitor at the moment, I plan to get one in the future when I am able.

I have not included "tech stack" stuff here: programming languages, frameworks, libraries. This stuff is forever in flux, sure I have my core knowledge of Ruby, JavaScript, Rails, Ember, Node, Python, etc. but I'm also interested in Rust, Elixir, TypeScript, React, Elm, Go, and so much more! I consider it my job to be open to working with any technology in the appropriate context.
