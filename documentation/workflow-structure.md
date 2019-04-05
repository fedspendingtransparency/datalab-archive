# Workflow Structure

This has been a big topic at datalab for quite some time now. This document should put an end to all suffering.


## Branching (best practices)

At `datalab` we want to try to follow the convention that the `dev` environment remains our "sandbox" while `staging` is the step before we go to `master`

To keep sanity, please always branch off from `dev` unless you are going to hotfix into the live site (`master`). More on that later.

The typical workflow is as follows

"I want to contribute" so...


```
git checkout dev
git pull origin dev
git checkout -b mybranch
```

Be sure to always have to latest version of dev before you branch off. This is important, otherwise you are going to have a ton of lovely merge conflicts.

Once you are done with your commit you can push your branch to the remote and then `pull request` into `dev`

```
git push origin mybranch
(make PR into dev)
```

## Updating `staging`

When we want to update our `staging` branch we dont want to just merge `dev` into staging. That is our (short term solution) and is being used for go-live crazyness. Our actual procedure involves saving every feature branch that you want to add and individually adding each feature branch to `staging`. The process will look like this.

```
(push feature branch to remote)
(once done messing around and testing in dev..)
(PR feature branch into `staging`
```

So you should not delete all of your branches that you update until they are merged into staging now. Unless you want to test them in `dev`, delete them from the remote and keep them on your local machine, then upload all the local branches you have to `staging`. This is probably only achieveable if you are managing your local branches and deleting your local branches as see fit, but that can get a bit much. Stick with the first notion of keeping all your feature branches up until you want them to go to `staging`. Label them properly so they are easier to identify.

## Moving `dev` into `staging` (short term solution!)

We can simply move `dev` into the `staging` env by PR'ing `dev` into `staging`.

`staging` is typically used for client demos and the state that will be tested heavily before a go live. All changes that want to be had before the go live 
will take the typical process of going into `dev` again before we are ready to test into `staging`. 

## Hotfixing

Hotfixing the live branch follows a similar process as doing work in `dev`. 
This time around, when you are hotfixing into `master` (live), the workflow will go as follows.

```
git checkout master
git pull origin master
git checkout -b branch-into-master
```

This will create a mirror of master for you to work on. These commits cannot go into `dev` or `staging` for namesake.
Afterall, it is a hotfix.


## Approval/Permissions

Any branch or commit that wants to go into `staging` or `master` will need review from a peer. This is a safety measure.
Ping your peer and have them do a quick review of the commits you are merging. Once good, we can okay that, and the `pull request` follows through with 
the merge. 

## Cleanup

Get into the habit of getting rid of branches that haven't been worked on for more than 2 months or so. This can keep the repository clean.

You can also get rid of local copys of the repository to keep your local git instance clean on the project if you so wish to do so. Remember, 
if you get rid of the local copy of git, you wont be able to recover the branch from the remote.
