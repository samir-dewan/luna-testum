# luna - tech tasks

If you are reading this then you have successfully found our git repo and are ready to take on our technical tasks!

All tasks are based around the fictional **luna** web app, which is a rudimentary React application built with Create React App and TypeScript that you will run on your local machine. The app is very crude and uses a local JSON file as it's data source - but please approach each task as you would in your normal working life if contributing to a production grade application.

Each task has a "YOUR COMMENTS HERE" section that we encourage you to leave some comments in relevant to the task you have just completed.

If you struggle with a particular task, or feel the instructions are not clear - that's not a problem. Just do the best you can and leave a note in the comments area for that task.

## Prerequisite - get the app up and running

Install the required dependencies and then run the app as a local dev build with:

```
npm start
```

## Task 1 - Product Tweaks 🔧

The following feedback has come in from the product owner, can you apply these updates?

- Sort the Category filter buttons alphabetically
- Add a "count" display to the Category filter buttons showing how many articles exist within each category
- Add a mechanism for users to clear any selected Category filter
- Ensure that all of the "View" button CTAs on the article grid are aligned with the equivalent buttons in the same row

```
For this task, I added a function that simply sorts the categories alphabetically. On clicking a category you can now unselect as well as select a category, and also changed the styling so that the "View" button CTA aligns along all equivalent buttons in the same row.

There are a couple of features that I want to action off the back of this task, that I will come back to when the rest of the tasks are sufficiently completed:

1 - Make each Category filter button look better. I want to make the count of articles on each button be more apparent, and change into a tick if it is selected, for visual clarity. I also want to add some colour animation on hover, in order to highlight that the button is interactable.

2 - Make the whole Category section look better. Right now, I think that the scrolling of left to right isn't ideal. I want to make the buttons slightly thinner and then wrap them round so that they're all on the same page.

3 - Make multiple Category buttons clickable - right now, you can only select one Category to filter down on. It would make more sense, particularly as the number of articles increase, to have multiple Category buttons and therefore filters applicable by the user.

POST-ATTEMPT: I've improved the Category filter buttons and section to wrap around, making the buttons smaller in padding but also becoming more interactive. On click, the buttons now show a tick next to them and become darker, and on hover, they grow larger. On mobile they take up a lot of space - if I had more time, I would conditionally render a dropdown box with the filters and only show the filters that were active on mobile breakpoints.

```

## Task 2 - Test Coverage 🤓

The app currently has a test coverage of around `70%` which can be checked by running:

```
npm run test:coverage
```

Can you add extend the `App.test.tsx` file to get our overall coverage to in excess of `85%`?

```
I managed to get the current suite of features up to a 93% coverage, mainly by adding in a new test that confirms that an article will pop up when you click on the relevant article card. However, it's worth coming back to the test coverage once all the tasks are done, as more features will be added and more things will be testable - namely, the search function that will appear as a result of task 7.

1 - Once the search function has been created, create a test that will check if it's working as intended.

2 - Ensure that tests do not look at specific outcomes, but the outcome is correctly based on the input. For example, it shouldn't be that I test for a specific article name (say, "Test Article 1") to open up a specific article description (say, "Test Description 1"). Instead, I will make sure every test script will take a set input and will expect the correct set outcome. In a completely ideal world, I'd take a random seed of the data for testing; that way we would know that what I get as an outcome of my testing is expected for any input.

POST-ATTEMPT: I added a search function test, which worked perfectly by highlighting my search function hadn't worked post-updated to task 1! That has now been updated. I've added some non-specific strings to add some end to end element to the testing scripts - in an ideal world, we would break down the scope of these scripts further to ensure that we know precisely which block of our codebase we are testing, but for now these show a 96% test coverage.

```

## Task 3 - Article List Content 📜

The `ArticleDisplay` component isn't quite complete as it is not able to render any lists that appear in the article content (i.e. if you view the "Explaining eye bags" article you should see two red blocks stating "LIST CONTENT NEEDS TO APPEAR HERE")

Can you finish off the implementation by ensuring that list content is displayed in articles appropriately. Feel free to overhaul the existing implementation as you see fit

```
I managed to create a function that would take all the text out of the data.json file and display it as it's meant to be, depending on whether it's a bulleted list or an ordered list. Annoyingly (to me), I've had to make an if statement that just checks if it's a bulleted list or an ordered list; there has to be a cleaner way of writing the code than I have!

1 - Low priority, but find a cleaner way of coding this function for bulleted and ordered-lists. Haven't been able to look at this!

```

## Task 4 - Shared Components 👪

The product owner has asked that the main CTAs in the app (i.e. the "View" and "Close" buttons on the `ArticleGrid` and `ArticleDisplay` components) have their text displayed in uppercase. As an optimisation while making this change can you refactor those two components to use a common `Button` component (so that when the product owner decides to revert this change we only have to do it in one place 🤭)

```
I've created a Button component that takes as variables: a function that it'll do on clicking it, some text that will be in the button, and whether that text should be in uppercase or not. While for the "View" and "Close" buttons we do want the buttons to be uppercase, it might be that we want future buttons to not, so I thought it'd be better to have it as a variable.

```

## Task 5 - Mobile Responsiveness 📱

We have had some feedback that the web app isn't working particularly well for users on mobile devices when viewing articles. Can you upgrade our ArticleDisplay component to be more mobile friendly while not impacting the current desktop experience?

```
I created two breakpoints - one of which breaks at 810px, which covers tablets, and one of which breaks at 480px, which covers mobiles. The tablet breakpoint follows the same format as usual desktop experience, just with smaller cards - this means that you can have two cards in the ArticleGrid component for most of the tablet viewpoint, until it becomes too small to feasibly have. The mobile experience changes the Article cards into longer lengthwise cards, more traditional of a mobile app.

Off this, I think that the "View" CTA shouldn't be the only place by which you can press and open the relevant article - the entire Article card should be pressable, as long as it's animated responsively and doesn't impact the current experience. With that in mind, it would also be useful to remove the "View" CTA entirely in the mobile viewpoint, so that there is more space for the article titles and descriptions to be viewable. With regards to accessibility it's a difficult trade-off - on the one hand it may be easier for people who won't be able to understand the responsive design that the article cards are clickable, but on the other hand it will mean that the article cards are more readable in their titles and descriptions. The reason why I hadn't reduced the size of the fonts across all breakpoints is to improve legibility.

1 - Make the whole Article card pressable, opening the 'ArticleDisplay'.

2 - Remove the "View" CTA at mobile breakpoint, leaving the card as clickable to open the 'ArticleDisplay'.

POST-ATTEMPT: Both of these have been done. I left the "View" CTA within non-mobile breakpoints, even though the whole Article card would be clickable, as I feel it adds to the UX at those breakpoints, whereas to mobile users who are more used to clicking on things as part of design, having no "View" CTA would not be an issue design-wise.


```

## Task 6 - Accessibility 👓

An independent accessibility audit has highlighted some issues with our app. Can you explain what accessibility means in this context and implement some accessibility related enhancements to our app?

```

In this context, accessibility is the degree to which the user experience of an application to be serviceable to any audience. Normally, accessibility is considered in the context with those of particular disabilities, people with vision or hearing problems, issues with motor skills or learning disabilities such as dyslexia, and amputees or epileptics can all be catered for with careful website design, which is where accessibility related enhancements to apps become necessary for particular audiences.

I've added alts to every image on the application, so those who need audio descriptions can understand what the images show. All line-heights, text-sizes, and font-sizes I've endeavoured to keep in rem over pixels, so that people who find it difficult to read small text on screens can increase the size through their browser.

Within App.tsx, I put the Hero component in a <header> tag so that users using screen readers could easily jump between the header and the body. I've kept it out of the Hero component as we may wish to add additional component features (navigation within the website, an account page, etc.) within the header.

I also put the CategorySelector in a section tag so that screen reading users could identify the core navigating body of the app. I also changed the CategoryOption from a div to a button, so it could be easily identified as a filter rather than a seemingly non-interactive div.

The one thing I would like to add is a dark mode for easier readability. A hesitation I have is around using colour to determine responsive design, so I would like to make the app easily readable in monochrome also, which would mean that hover and click animations should be readable even in black and white.

1 - Add a dark mode.

2 - Hover and click animations should be all in darker and lighter colours, so that it can be read by colour blind people.

POST-ATTEMPT: I tried to use darkmode-js to add a dark mode to the application, but it wouldn't work properly and got rid of some of the colour palette within the App when not in dark mode. I've kept dark mode out of the app for now, sadly, but would work on it given more time.

Hover animations now are in darker and lighter colours so can be read, also categories grow in size when hovered, to add visual response even if you are colour blind.

```

## Task 7 - New Search Feature 🔎

It's time to roll you out your very first feature! The brief is short and there are no designs for us to use as it needs to be shipped tomorrow! 😬

The brief: Users need to be able to search across all of our articles via text

```
I've created a search bar that upon clicking search will look at all article titles and only display the ones that match the text. This works alongside the Category filters, so you can filter on a single Category and then also search for a particular word or phrase.

I want to improve on this Search feature in a few ways:

1 - Make the Search function not need to click on the 'Search' button in order to look up relevant articles.

2 - Make the Search function also look at article descriptions and even the Article text contents through and through. This would likely be something I would want to check with the user requirements with in a real-life scenario, but let's make the fullest functionality and then drill easier!

POST-ATTEMPT: I made the Search function to live update depending on the text, and did not like how much it would move around the articles, so changed it back (updated the styles of the Search bar). I included article descriptions in the searchbar function, but kept Article text contents out, as from a user perspective it isn't clear as to why those articles stay available within the search (whereas article subtitles do appear).

```

## Bonus Task - Make the app "Pop" ❤️

As our newest team member, seeing the (albeit rudimentary) **luna** web app with fresh eyes for the first time is a moment that we like to capitalise on! Can you comment on the UX of our web app, and implement some changes that you think would **delight and surprise** our users.

```
I've added a set of animations to the CTA buttons, Article sections and Category filters. On clicking Category filters also, rather than them going white, I've made them go to a darker colour than they were for some colour consistency. Hopefully the app looks good enough to delight and surprise our users now!

```

The first thing I'm going to do is work on all the actions that I've written up on every task so far. Normally, I would prioritise these in some kind of KANBAN board, but I'm fairly confident I can do all of them (barring Task 3.1). As well as that, adding some responsive design via colour based animation will be the first thing I'll be looking at doing!

```
