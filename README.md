# Create a JavaScript Action using TypeScript

:spiral_notepad: Adapted from [GitHub's typescript-action README](https://github.com/actions/typescript-action)

Use this template to bootstrap the creation of a TypeScript action. :rocket:

This template includes compilation support, tests, a validation workflow, and versioning guidance.

## Create an action from this template

Use the [CI/CD Dashboard](https://ci-cd-dashboard.invitationhomes.com/admin/create-repository) to create a new repository using this template.

## Code in Main

Install the dependencies

```bash
yarn
```

This project uses [esbuild](https://esbuild.github.io/) for packaging, and runs automatically on pre-commit to enhance the developer experience and reduce the manual step of building the executable output.

Run the tests :heavy_check_mark:

```bash
yarn test
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

Start with modifying the `src/run.ts` file.

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

Any branches or tags are published and can be used within private repos in the `invitation-homes` organization! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

See the [actions tab](https://github.com/invitation-homes/typescript-github-action-template/actions) for runs of this action! :rocket:

## Usage:

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action
