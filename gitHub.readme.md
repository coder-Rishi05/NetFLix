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

---

- Advance

12. collborating
13. COntributing.
14. remote.
15. .gitignore.
16. fetch pull push
17. and much more

---

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

---

jab bhi aap ek folder pe kaam kerte han to github ko nhi pta hota there for we initialize it
now git have permissions it knows the folder. but it still dont do the work.

kynki git kaam kr skta hai is per to ab hm yhan per
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

---

### branchings

to hm branching me kya krte han ki jo hamara main project hai uska ek duplicate project bnate han or saare tasks us per perform krte han na ki main project pe esa esliye taki main branch me hamesha clean or safe code bhej sken. or jb hamara clone branch me project theek kaam krega code nhi fatega tb hm use main branch pe push krte han.

main code se copy : branching.

to create branch

git branch feture/navbar

tell total brach
git branch
feture/navbar

- main

- means we currently working branch.

to change the branch
git switch feture/navbar

git branch

- feture/navbar
  main

now if i edit or make chages then commit in this branch it will show those changes on my main branch

ex:
main branch
|- pc.text
|- hey hi

git switch feture/navbar
|- pc.text
|- hey hi
|-i am in feture/navbar branch

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

- merging

for merging branchs we must be on main branch

git merge feture/navbar branch

git merge feture/navbar
Updating 629d5db..4a945b0
Fast-forward
pc.txt | 4 +++-
1 file changed, 3 insertions(+), 1 deletion(-)

now i have same code in my main branch too.

### conflict

when i have diffrent code on same line of main branch and feature/navbar thenn git give conflict.

ex:

main
hey hi

i am in feture/navbar branch
chacha

feature/navbar

    hey hi

    i am in feture/navbar branch
    hellloooooo

now it will throw this error

git merge feture/navbar

Auto-merging pc.txt
CONFLICT (content): Merge conflict in pc.txt
Automatic merge failed; fix conflicts and then commit the result.

now i have 3 options

1. Accept Current changes : if i do this to mughe ise commit krna pdega or mere main branch me updated code aa jaaega jo prehle se hi vhan tha.

ex:
hey hi

i am in feture/navbar branch
chacha
helllooooooo

- git log --oneline --graph graph and oneline

```
git log --oneline
8b40888 (HEAD -> main) Merge branch 'feture/navbar'
db4ddce (feture/navbar) "added 1 line"
934334c "added third line"
4a945b0 "added some line"
629d5db hi
127579c "added new"
dbd1293 "hey"
152232d first point
1437e89 17th aprill
35a93fa (origin/main, origin/HEAD) Main branch code

git log --oneline --graph
*   8b40888 (HEAD -> main) Merge branch 'feture/navbar'
|\
| * db4ddce (feture/navbar) "added 1 line"
* | 934334c "added third line"
|/
* 4a945b0 "added some line"
* 629d5db hi
* 127579c "added new"
* dbd1293 "hey"
* 152232d first point
* 1437e89 17th aprill
* 35a93fa (origin/main, origin/HEAD) Main branch code
```

2. Accept incoming changes : issme second branch ka update aaega.

3. Accept both changes : isme dono ke hi code nyi line pe aaenge.

4. Compare changes

types of merge

Fast forwared merge. isme hm merger nhi krte balki ho updated branch hai usko hi main branch bna dete han.

Three way merge : isme 3 branches se ek main branch bnate han.

squash maerge
recursive strategy merge
rebase merge

conflict handle krna

branch delete krna : git branch -d branch_name(feature/navber)

~stashing samajhana

jab aap kisi branch mein kaam kr rhe ho and aapne kuch code likha and aapne us code ko commit nhi kiya hai aur aap doosri branch me jaane ki koshish krte ho to git aapko bolta hai ki bhai saved nahi changes delete ho jaaenge.
hum chahe to un changes ko delete hone ya fir un changes ko draft kr skte han jb bhi draft karenge to wo changes naa hi delete honge na hi add honge but beech me kahin dale rhenge fir aap us branch me vapas aaye to wapas se apply kr skte ho

command to create and switch to the branch

git switch -C feature/add-footer
Switched to a new branch 'feature/add-footer'

this comes when we update something without commititng it

git switch feature/add-footer
error: Your local changes to the following files would be overwritten by checkout:
pc.txt
Please commit your changes or stash them before you switch branches.
Aborting

to stash the files

```
git stash
Saved working directory and index state WIP on main: 8b40888 Merge branch 'feture/navbar'
git switch feature/add-footer
Switched to branch 'feature/add-footer'
```

now i can move to my branches but all my uncommited data will be removed
to get them back
command :

```
git stash apply

```

to clear stash

```
 git stash clear
  stash apply
    No stash entries found.
```

Common steps for collaborations

1. first person create a github repo and put code there then add collaborators.
2. others will clone the repo
3. apni new branch create kren and write new code on that branch
4. on complete commit then inform other teammate about that code.
5. main person will fetch and merge and re push the code.

Practical

```
to sabse pehle ek repo bano
fir collaborators me jaake user ko find kro.
uske baad jake unhe request bhejo
vo request add krega.
dusra banda apne laptop pe vo clone krega

```

uske baad vo ek new branch bnaega

git clone https://github.com/coder-Rishi05/testing-collab.git
us branch me kaam krega.

cd .\testing-collab\ moving to testing folder.

git switch -C feature/adding-marquee // creating a new branch and switching to it.

git branch

git add .

git commit -m "added marquee features"

phir us branch ko repo pe push krega or btaega done.
git push -u origin feature/adding-marquee

```



phir main banda usko fetch krega

 git fetch

uske baad branch change krke dekhega ki code theek ya nhi
git switch feature/adding-marquee


agr theek for main ke sath merge kr dega
git switch main
git merge feature/adding-marquee

main me push kr dega.
 git push origin main

ab dusra bnda bhi fetch krega

 git fetch
 git pull

or pull krega tbhi uska main bhi update ho jaaega.



```
