# dev-kashmir-website

Help us build the directory of Kashmiris thriving in the field of programming. If you know someone who deserves to be on the list, nominate them by clicking the Nominate button and filling the form. And hey, it's alright to nominate yourself. 😊

## Nomination

### Using Google Forms

The easiest way to send a nomination is to use [this Google Form](https://forms.gle/a8eWcAMFWxyqDKG9A)

### Send a PR

You can also send a PR to this repo, and add a file your nomination in the `/pages/devs/` folder. Save your profile image in `/public/images/devs/` folder. Keep the filename same for both the `.mdx` and image files.

Use the following template

```yaml
---
name: <Your Name>
image: <filename of your image, stored in /public/images/devs>
address: < Your Address>
tags: []    <Array of Tags>
description: <Description>
links:
  - name: "instagram"
    url: "https://instagram.com/username"
  - name: "github"
    url: "https://github.com/username"
  - name: "linkedin"
    url: "https://linkedin.com/username"
  - name: "twitter"
    url: "https://twitter.com/username"
  - name: "globe-asia"
    url: "https://domain.com"
layout: developer
---

Markdown Content
```

In the links field, make sure to use FontAwesome Icon names for the `name` field

In the Markdown Content, please answer the following questions if you can. This will be shown in your profile page.

* Who are you, and what do you do?
* What hardware do you use?
* What does your workspace look like?
* What software do you use?
* What programming language would you use if your life depended on it?
* What is your favourite food to have while programming?
* What kind of music do you prefer while working?
* What is the one piece of advice you would give to a developer getting started?
* How can we improve the software development culture in Kashmir?
* One thing that you want to plug about yourself or someone else.
