### Central Code base

when we want put our code to central codebase this is github.
git : managing project on owns system.
v1.0 v2.0 v3.0

basically bulding different version of code, and tarversing between these versions. its like saved points.

self work management :
collab : 



Syllabus topics : 

1. Start
2. Ideation
3. make changes 
4. checking blogs 
5. staging 
6. commiting
7. reverting
8. branching
9. stashing.
10. merging
11. conflicts handling
----
- Advance

12. collborating
13. COntributing.
14. remote.
15. .gitignore.
16. fetch pull push
17. and much more


-------

📘 Git Configuration Guide

When you install Git for the first time, you need to set up some basic configuration so Git knows who you are, which editor to use, and how to handle line endings.

These commands help you configure Git globally (for your whole system).

👤 Set Your Username

This sets your Git username.
git config --global user.name "name" 
Git uses this name in commits to identify the author.

Example:
git config --global user.name "Rishabh Rawat"


📧 Set Your Email
git config --global user.email "email@female.com"
This sets your Git email.
GitHub and other platforms use this email to link your commits to your profile.

Example:
git config --global user.email "your@email.com"


📝 Set Default Editor
This tells Git to use Visual Studio Code as the default editor.
The --wait flag makes VS Code stay open until you close it, so Git can continue only after you finish editing (useful for commit messages, merge conflicts, etc.).
whenever github face problem it will open vs code.
git config --global core.editor "code --wait"



🔄 Handle Line Endings
git config --global core.autocrlf 
ex: git config --global core.autocrlf true

⚙️ Open Global Config File

Opens the global configuration file in your default editor.

Here you can manually edit all settings at once.

Example file content:
git config --global -e

```
[user]
    name = Rishabh Rawat
    email = rishabh@example.com
[core]
    editor = code --wait
    autocrlf = true


```

git config --list

✅ Verify Your Settings
To check your current configuration:

Stages : 
U - untracked => git is not managing and tracking this file.
A - Added or Staged => now git aware about this file.
C - committed. => to know previos save point.
 after commit it makes it saved changes


- to know the saved checked points

 git log --oneline
        
        ```
        0be7d58 (HEAD -> main) 18 april
        1437e89 17th aprill
        35a93fa (origin/main, origin/HEAD) Main branch code

        these unique id's help in going to that point.
    ```

    .gitignore : ignore files which are in it.

- to go previous file saved points

    git reset --hard : remove previos data from every where
    git reset --soft :

    this command help to go 1 step before the new version
    git reset --hard HEAD~1  
    ex: 

    0be7d58 (HEAD -> main) 18 april

    git reset --hard HEAD~1  

    HEAD is now at 1437e89 17th aprill

    we use 1 there fore 1 step behind if 2 then 2 step behind.


------

jab bhi aap ek folder pe kaam kerte han to github ko nhi pta hota there for  we initialize it
now git have permissions it knows the folder. but it still dont do the work.

kynki  git kaam kr skta hai is per to ab hm yhan per 
untracked
tracked/addeded
modified
staged
or saved checkpoints create ke skte han now git have permissions here.



by default every file is untracked git manage it jb ham ise track krate han.

initialise kro

hmm git se check kr skte han
ki konsi si file konse se stage pe hai



```
git status -s

?? gitHub.readme.md
iska mtlb hai untacked file

git add gitHub.readme.md
file added

A  gitHub.readme.md

git status -s

file added and modified

AM gitHub.readme.md

git commit -m "first point"
file commited

git status -s
now i will not have any status of this file

kyonki git sirf unka status btaega jo files commited nhi han ya phir commit hone ke baad change nhi hua.

anything i will do after that 
ye dubara status dikhaega
added modified

git status btata hai before and after commit condition of file.


git log btata hai sare commit histories.
 git log --oneline
dbd1293 (HEAD -> main) "hey"
152232d first point
1437e89 17th aprill
35a93fa (origin/main, origin/HEAD) Main branch code

git log detail summary deta hai

 git log          
commit dbd1293f80dd49930815fe08927fb52f76125241 (HEAD -> main)
Author: Rishabh <rawatrishi1121@gmail.com>
Date:   Wed Oct 1 09:25:03 2025 +0530

    "hey"

commit 152232daaeb0fc4e76764ef14df5a07c9a9ab167
Author: Rishabh <rawatrishi1121@gmail.com>
Date:   Wed Oct 1 09:24:13 2025 +0530

    first point

commit 1437e8935c95f051c7ac9585f491a2435ff7c5a7
:

```

kitne saved checkpoints han 

```
git log --oneline, git log --oneline --graph

```
### branchings 

to hm branching me kya krte han ki jo hamara main project hai uska ek duplicate project bnate han or saare tasks us per perform krte han na ki main project pe esa esliye taki main branch me hamesha clean or safe code bhej sken. or jb hamara clone branch me project theek kaam krega code nhi fatega tb hm use main branch pe push krte han.





















- commands need to know


```
git status : to know current status of unstaged and staged files.
git log --online : to know current status of saved points.

managing your own projects.
making git available in our projects
making a checkpoint or saved point
    adding file
    staging them
    committing them
going back to previos saved points 

    logging everything
    reverting back to the previous saved point

```