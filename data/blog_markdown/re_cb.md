---
slug: "reverse-engineering-a-collegeBoard-app-ft-electron"
date: "2019-05-04"
title: "Reverse Engineering a CollegeBoard App ft. Electron"
---
# Reverse Engineering a College Board App ft. Electron 
As I finished my last CollegeBoard adminstred AP exam, I'm now able to tinker and uncover its digital testing app. Some background info if you're lucky to evade the world of Standarilzed testing. The college board is a compagny responsible for adminstrating national and internaitonal exmans such as the SAT and AP exams whcich assists your admission into American universities and earns you college credit, respectvly. 

Today's focus are the AP examns, usually they're given in large, vast rooms with strict security, but not this year. In 2021 students take it on their small screens: laptops, desktops, and chrombooks. The test, usually dilevred on paper is now adminstred online. Specifally It is delivered though an app made in Electron. Today I'm going to uncover the inner working of this to discover how the app is made, and what kind of tracking and personal information does it collect. 

### Electron 
Electron is  popular open source framework that allows you to build cross platform desktop apps. It powers VScode, Discord, and most importantly my AP exman app. For this case, The most crucial aspect of elctron, is that it is chrominum based which grants the me access to its powerful **DevTools**. If I can acess the DevTools, I can inspect the source DOM of the app. I can listen to its requests with the backend. I can gain insight into the app: how are the test questions retrieved from college board servers? Are they encrypted or plain Json? How much personal data does the app send? What is the used tech stack?

Those are all exciting questions to answer, but there is one botlneck: I can not access the devtools. The devtools is blocked.

## Bypassing Devtools Blockage
In most electron apps you can press the keybinding `ctr+shift+i` to summon DevTools. Try this in Discrod! However this approch failed in the digital test taking app. *hmm, why?* I've never done any serious pentesting, but I know that the best approch to break somthing is to learn building it. the best approcah to combat something is  to learn infecting it. If I want to enable devtools, I have to learn how to disbale them.
 
I found a forum thread titled [ A way to prevent developer tools](https://discuss.atom.io/t/a-way-to-prevent-developer-tools/29746) which provided a collection of techniques to disbale devtools; the most basic one was turning it off upon creating a new BrowserWindow Instance. `mainWindow = new BrowserWindow({ webPreferences:{devTools: false} })`
In order to bypass this. I'have to truthify `devTools: false` 

### Digging into Source & app.asar	  
The initilazatin of `BrowserWindow` is found in the app's source code. I need to access source to modify it. Apparnlty most electron source is archived into asar, an archive format simmilar to `tar`. 

In order to extract src, I downaded `asar` package from npm and unpacked it through `asar extract %APPDATA%/cb-examn-player/recourcesapp.asar src` .

The src had the following file strucutre:
```
main
|__ index.js
node_modules
preload
splash
pacakge.json
``` 
The crucial part is found at index.js which is a gigantic 10,000 lines file that contain all the electron side logic such as  the CB lockdown browser and the disabling of `devtools`
 

In reminds of the time where I got my first mechanical keyboards and smached random. 