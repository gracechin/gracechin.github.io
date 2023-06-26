---
layout: page
title: "Red Moon"
dates: "2023"
description: "For tracking menstrual cycles, one cycle at a time"
icon: "red_moon.png"
skills: "ReactJS, D3.js, Less CSS, React Bootstrap, Webpack"
link_to_project: https://track-your-red-moon.netlify.app/
---

In 2022, I was introduced to a way of understanding my body using the _Fertility Awareness Method (FAM)_ (thanks to a book by Toni Weschler). Long story short, I began self-tracking certain things, such as my temperature in the morning, my daily mood, and other parameters.

While there are plenty of period tracking apps, some didn't follow the FAM approach, some had fees, some didn't have the features I wanted, and some didn't look very attractive. As a result, I resorted to recording several cycles using pen and paper.

![Fertility Awareness Method via paper tracking][1]

In the middle of tracking my 7th cycle, I got tired of writing and drawing the same template every month so I stopped tracking. To satisfy my own wants and needs, I decided I needed to develop my own tracking tool. That was how _Red Moon_ started.

### Tracking One Cycle at A Time

Having tracked with paper and pen, I knew that I never needed to update previous cycles' data. I only ever needed to look at them for reference. This gave me the idea that users can export their data after each cycle and store that data themselves. The only data the app needed to store, to allow for updates, and to display is the most recent data (or current cycle's data), which are stored in the `localStorage` of the browser.

### The Period Chart

The most important aspect of an FAM tracker is probably the chart. It is where all the magic of understanding the body happens ✨. A typical FAM chart can be broken down into two tables and a graph, where each table column would correspond with the x-axis labels in the chart.

![Period chart diagram][2]

The chart was one of the trickiest parts to implement. Unfortunately, current React chart libraries (e.g. `react-chartjs-2`, which I tried using) did not provide the flexibility needed to create a synchronised chart-table component. In searching around, I found **[Sascha Klatt](https://saschaklatt.dev/)** and **[Murat Kemalder](https://bilebile.de/#/)** ‘s **_[Chartkin Table Walker](https://saschaklatt.dev/projects/react-d3-synchronized-chart-data-table)_**, which uses `D3.js` JS library. With the flexibility of using the library came a steep learning curve. Thankfully, there were plenty of online blogs and how-to pages available for me to dig around.

### Not The End

Making _Red Moon_ has definitely revived my habit of tracking everyday. While the important features are implemented and it is live, I can see myself adding even more features (and probably fixing bugs) as I go. If you are interested, watch [this space](https://track-your-red-moon.netlify.app/#/about)!

[1]: {{site.url}}/assets/pages/red-moon/paper_tracking.jpeg
[2]: {{site.url}}/assets/pages/red-moon/synchronised-chart-diagram.png
