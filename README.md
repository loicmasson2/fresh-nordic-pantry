# Nordic Pantry Website

[See it live](https://www.nordicpantry.one/blog/)

## Getting started 

### Pre-requisites
- node 16
- npm 8

```bash
npm i

npm run start
// the project will be launched on localhost:8000
```

## Where to write new recipes

### For English
Create in `/pages/blog` a new subfolder with the recipe name.

### For Finnish
Create in `/pages/fi/blog` a new subfolder with the recipe name.

## How to write new recipes

Create a new `*.mdx` file.  
Here is a [markdown cheatsheet if needed](https://www.markdownguide.org/cheat-sheet/).

### Properties

**title**: title that will be displayed  
**slug**: will be used for the url (use format _word-word-word_)  
**date**: published date ( format _YYYY-MM-DD_ )  
**image**: path of the image ( can omit it )  
**tags**: array of tags that will be used.  
If you add a
new tag it will be added automatically to the menu of the main page. ( _["myfirsttag", "mysecondtag"]_ )  
**lang**: which language ( either _en_ or _fi_ )

### Content

The first text should be a general description.  
Then **##Ingredients**  for the list of ingredients.  
Then **##Preparation** for the list of steps.

## How to publish a new version
It will be automatically deployed when committing to main.  
The pipelines will run on Gatsby cloud. It takes few minutes for the pipelines to run.

## Architecture project

**Pages** will do the data fetching from GraphQL.

**Main blog page** is in `/src/components/Parts/BlogPage`.

**Recipe page** is in `src/components/Parts/Recipes`.

**Wrapper** is the high level component to translate all the children.

**PageLayout** is the high level component for the blog page.

## Translations for shared text

I am using `react-intl`.  
All components needs to have `Wrapper` somewhere as a parent.

To add a new string edit in `/intl` folder both languages and add a new key.

The key needs to be the same for all languages.

For example for "go back"

In `en.json`

```
  "back": "Go Back"
```

In `fi.json`

```
  "back": "Mene takaisi"
```

Then in the code base 

```
<FormattedMessage id={"back"} defaultMessage={"Go back"} />
```

## Owner
Loïc Masson & VT