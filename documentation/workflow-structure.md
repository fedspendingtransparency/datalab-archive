# Workflow Structure

## Overview

The Data Lab team is using a modified version of the GitFlow approach to manage branches and promote code to production. The main branches used are
`master`, `staging`, `dev-release`, and `sandbox`.  `master` is deployed to the production environment, `staging` is deployed to the staging environment and `sandbox` is deployed to the dev enivronment.
  The GitFlow approach was modified this way so the team can use the dev environment as a "sandbox".  The dev environment includes in progress features that
may or may not be slated for the next release and is used for demoing to designers and product owners.

Feature development starts as a temporary feature-branch off of `dev-release`.  Completed features are merged into `dev-release`. `dev-release` is promoted to
 `staging` at the end of each sprint through a pull request.  After features are verified in the staging environment, the `staging` branch is then merged to `master`
  in another pull request. At this time production-ready code is on the `master` branch, and a production release can be deployed.

If the currently-deployed production release needs to be patched before the current release under `dev-release` deploys,
a temporary hotfix-branch can be created off of `staging`, and will make its way to production following the hotfix process.

## Main Branch Descriptions
1) `dev-release` : This is the team's default working branch.  Developers create new and push completed features branches here.
2) `staging` : Staging is for features that are ready for release, hot fixes, and bug fixes. This branch is linked to the staging environment.
3) `master` : This branch is linked to the production environment.
4) `sandbox` : In progress feature branches are merged into this branch to demo in the dev environment.  NOTE, Please *do not* branch directly from sandbox.  Also, please *do not*
push directly to sandbox (ie. without going through a feature branch).


## Day to Day Workflow

Feature development begins by creating a feature branch from `dev-release`.

```
        git checkout dev-release
        git pull origin dev-release
        git checkout -b my-feature-branch
```

When the feature branch is ready to be reviewed by a product owner and / or designer, the feature branch is merged into `sandbox`.  The `sandbox` is deployed to the dev environment.

Use the following Git commands OR create a pull request and merge through Github:

For first time use of `sandbox`:

```
         git add .
         git commit -m "commit message"
         git fetch origin sandbox
         git checkout sandbox
         git merge <your feature branch name>
         git push origin sandbox
```


For subsequent uses:

```
         git add .
         git commit -m "commit message"
         git checkout sandbox
         git pull origin sandbox
         git merge <your feature branch name>
         git push origin sandbox
```

Once a feature is completed, create a pull request in Github and merge the branch into `dev-release`.

## When Developers Work Together on a Feature

If you are working on a feature with a peer, please work off of a main feature branch.  Each developer should create a sub feature branch from the main feature branch and merge when complete.

```
main-feature-branch:     1 - - - - - - (Merge commit) - - - - - - - - - - - (Merge commit)
sub-feature-branch-1:      \ 2 - 3 - 4 /                   \                /
sub-feature-branch-2:                                       \ 5 - 6 - 7 - 8/
```

```
         git checkout -b main-feature-branch
         git checkout -b sub-feature-branch-1

```

Please communicate to ensure your edits will not negatively affect other devs.  Examples of edits that could negatively affect other devs would be changing css that is global or shared between
several parts of the feature, changing Javascript that is used throughout the feature (ie. variables, scripts included, etc), making changes to the same files, etc.  When in doubt, please reach out.



## Promoting to Staging and Prod

At the end of each sprint, `dev-release` will be PR'ed by a dev team member and merged into `staging`. `staging` is used for pre-production testing.  After tests have passed, `staging` is
merged into `master`. `master` is tagged with a release version number.

![alt text](https://github.com/fedspendingtransparency/datalab/blob/feature/DA-3824/documentation/branching.png)

## Hotfixing

Hotfixes should occur off the `staging` branch only.  If you need to create a hotfix for `master`, please create the hotfix branch from `staging`, test it in `staging` and
then we'll promote the fix to `master`.

```
        git checkout staging
        git pull origin staging
        git checkout -b hotfix-branch
```

Usaspending is using the GitFlow approach.  Though some details about their approach are different, many items apply for Data Lab.  Please see their branch strategy documentation for an important note about timing hotfix branches:
<https://github.com/fedspendingtransparency/data-act-documentation/blob/master/github/branching_strategy.md#timing-hotfixes>

## Approval/Permissions

Any branch going into `staging` or `master` will need review from a peer. This is a safety measure.
Ping your peer and have them do a quick review of the commits you are merging. Once good, we can okay that, and the `pull request` follows through with 
the merge. 

## Cleanup

Please delete your feature branch once you have merged your feature into `dev-release`. This can keep the repository clean.