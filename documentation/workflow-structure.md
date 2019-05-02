# Workflow Structure

## Overview

The Data Lab team is using a modified version of the GitFlow approach to manage branches and promote code to production. The main branches user are
master, staging, dev-release, and sandbox.  We modified the GitFlow approach as the team must use the dev environment as a "sandbox".  The sandbox branch includes in progress features that need to be demoed to stakeholders.

## Branches (Day to Day Workflow)

Main branch descriptions:
1) `dev-release` : This is the team's default working branch.  Developers create new and push completed features branches here.
2) `staging` : Staging is for features that are ready for release, hot fixes, and bug fixes. Tied to the staging environment.
3) `master` : Tied to the production environment.
4) `sandbox` : In progress features branches are pulled into this branch to demo in the dev environment.

Feature development begins by creating a feature branch from `dev-release`.

```
        git checkout dev-release
        git pull origin dev-release
        git checkout -b my-feature-branch
```

When the feature branch is ready to be reviewed by PO and / or design, the feature branch is pulled into `sandbox`.  The sandbox is deployed to the dev environment.

Git commands for the first time you use sandbox:

```
         git add .
         git commit -m "commit message"
         git fetch origin sandbox
         git checkout sandbox
         git merge <your feature branch name>
```

Git commands for all subsequent uses:

```
         git add .
         git commit -m "commit message"
         git checkout sandbox
         git pull origin sandbox
         git merge <your feature branch name>
``

Once a feature is completed, create a pull request in Github and merge the branch `dev-release`.

## Feature Branches and Sub-Feature Branches

TBD

## Moving `dev-release` into `staging`

At the end of each sprint, `dev-release` will be PR'ed and merged into the `staging`.


`staging` is typically used for client demos and the state that will be tested heavily before a go live. All changes that want to be had before the go live 
will take the typical process of going into `dev` again before we are ready to test into `staging`. 

## Hotfixing

Hotfixes should occur off the staging branch only.  If you need to create a hotfix for master, please create the hotfix in staging, test in staging and then we'll promote the fix to master.

```
        git checkout staging
        git pull origin staging
        git checkout -b hotfix-branch
```


## Visualizing the process

![alt text](documentation/branching.png)

## Approval/Permissions

Any branch or commit that wants to go into `staging` or `master` will need review from a peer. This is a safety measure.
Ping your peer and have them do a quick review of the commits you are merging. Once good, we can okay that, and the `pull request` follows through with 
the merge. 

## Cleanup

Get into the habit of getting rid of branches that haven't been worked on for more than 2 months or so. This can keep the repository clean.

You can also get rid of local copys of the repository to keep your local git instance clean on the project if you so wish to do so. Remember, 
if you get rid of the local copy of git, you wont be able to recover the branch from the remote.
