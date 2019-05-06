# Workflow Structure

## Overview

The Data Lab team is using a modified version of the GitFlow approach to manage branches and promote code to production. The main branches used are
`master`, `staging`, `dev-release`, and `sandbox`.  The GitFlow approach was modified so the team can use the dev environment as a "sandbox" and include in progress features that
may or may not be slated for the next release.  The dev environment is used for demoing to designers and PO as a feature is being developed.

## Day to Day Workflow

Main branch descriptions:
1) `dev-release` : This is the team's default working branch.  Developers create new and push completed features branches here.
2) `staging` : Staging is for features that are ready for release, hot fixes, and bug fixes. This branch is tied to the staging environment.
3) `master` : This branch is tied to the production environment.
4) `sandbox` : In progress feature branches are merged into this branch to demo in the dev environment.  NOTE, Please *do not* branch directly from sandbox or
push directly to sandbox (ie. without going through a feature branch).

Feature development begins by creating a feature branch from `dev-release`.

```
        git checkout dev-release
        git pull origin dev-release
        git checkout -b my-feature-branch
```

When the feature branch is ready to be reviewed by PO and / or design, the feature branch is merged into `sandbox`.  The sandbox is deployed to the dev environment.

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
```

Once a feature is completed, create a pull request in Github and merge the branch `dev-release`.

Feature Branches and Sub-Feature Branches

If you are working on a feature with a peer, create a main feature branch for the larger feature.  Then each dev should create sub-feature branches from and merge completed sub-features here.

```
main feature branch:     1 - - - - - - (Merge commit) - - - - - - - - - - - (Merge commit)
sub-feature branch 1:      \ 2 - 3 - 4 /                   \                /
sub-feature branch 2:                                       \ 5 - 6 - 7 - 8/
```

```
         git checkout -b main-feature-branch
         git checkout -b sub-feature-branch-1

```

Please communicate to ensure your edits will not negatively affect each other.


## Promoting to Staging and Prod

At the end of each sprint, `dev-release` will be PR'ed and merged into `staging`. `staging` is used for pre-production testing.  After tests have passed, `staging` is
merged into `master`.

## Hotfixing

Hotfixes should occur off the `staging` branch only.  If you need to create a hotfix for `master`, please create the hotfix in `staging`, test in `staging` and
then we'll promote the fix to `master`.

```
        git checkout staging
        git pull origin staging
        git checkout -b hotfix-branch
```


## Visualizing the Workflow

![alt text](https://github.com/fedspendingtransparency/datalab/blob/feature/DA-3824/documentation/branching.png)

## Approval/Permissions

Any branch going into `staging` or `master` will need review from a peer. This is a safety measure.
Ping your peer and have them do a quick review of the commits you are merging. Once good, we can okay that, and the `pull request` follows through with 
the merge. 

## Cleanup

Please delete your feature branch once you have merged your feature into `dev-release`. This can keep the repository clean.
