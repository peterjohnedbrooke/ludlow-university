1. I started with creating a basic create-react-app and installing the relevant dependencies such as react-router-dom, sass.

2. With this kind of project I like to write down what the components might look like, how they relate to eachother and whether there are any reusable components in the tree in order to make the design reusable and scalable. The figma is nicely done which helps in the creation process as each component can be mapped out to the correspondening figma asset. Hero, Upcoming events, Footer, Feature Banner, Cards. I believe I'm going to wrap this single page app into a route Landing component just because this is how I've previously done things, not sure this is appropriate on larger scale projects. 

3. I then went on to have a look at the google fonts used, added the api reference to the index.html in the public folder and imported the fonts accordingly, I want to set these fonts as global primary and secondary variable fonts, that way if the fonts are changed later we can change these variables only once. 

4. I've built out the navbar as per the figma specs as a Header component containing the logo and nav components. I would usually call this header component navbar and code as such but the figma specs point to using a header component which contains both.


5. I was experimenting for quite some time on how to attack the Card grid layout as it's not completely conventional sizes, the layout of the first row for instance seems to be dictated by the width of the images rather than any gris design, ie Activities & clubs = 2fr and Accomodation = 1fr, from a purely code perspective this is how I would do this, ensuring responsiveness across many devices. But as per the specs I;ve tried to keep the design in line with the figma layout and jsut used the images width to set the grid and set the max width to the layout specs. 

6. Coming down to the Feature Banner we see that it's the same max-width as the header of 1440px, wich means it needs to have the same wrapper as the header and not the rest of the page content.

7. Perhaps not the biggest concern here but to demonstarte my understanding of using Javascript within react and how powerful jsx can be I've added the data for the cards each into objects and then mapped over these to produce the card components for each relative section. On a real world project this data wouldn't be kept locally but the execution would be much the same ie making an api call and then mapping over that data. This is really useful as it means we can create a reusable component such as a card and inject that with whatever data we like. 

Dependancies/NPM
sass
react-media
hambuger-react


Older Browser Concerns

1. Need backdrop filter work around https://stackoverflow.com/questions/38145368/css-workaround-to-backdrop-filter 
2. border-image css property for button border gradient, how backwards compatible is this?