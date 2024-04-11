# UTDallasRugby Site

## Contributing

### Trunk Based Developement

[Trunk Based Development Intro](https://trunkbaseddevelopment.com/)

Make little branches for each feature and quickly merge them into master often.

If Master ends up ahead of your branch follow this [guide to rebase](https://blog.algolia.com/master-git-rebase/).

### How to Fork the Repo

[fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)

### Developing Locally

```shell
npm i
npm run develop
```

Make your changes and see them at http://localhost:8000/

### Linting

This is a good practice for a couple of reason. One better diffs between
commits, also so style is consistent.

I followed this
[guide](https://medium.com/@stojanpeshov/how-to-setup-gatsbyjs-starter-with-typescript-eslint-prettier-269b1a0a812f)
when I set it up if you're interested.

If you're using [VSCode](https://code.visualstudio.com/) add this to your
`settings.json` and it will use these settings to format things for you automatically.

`settings.json`

```json
"eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
```

## Maintenance

Things that need to be done

### Updating the Calendar

Update the Google Calendar and it will update on the site.

### Updating Results and Standings

Change the iframe URLs to have the new season

```html
https://usarugbystats.com/.../2019-2020/schedule -> https://usarugbystats.com/.../2020-2021/schedule
```
