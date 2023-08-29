document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  });






  /*Astro is a static site generator that uses JavaScript to render its pages. However, it only runs JavaScript that is written in the frontmatter of components at build time. This means that the JavaScript is executed once, when the page is first generated, and then the resulting HTML is sent to the browser.

This has several benefits:

It improves performance. By running the JavaScript at build time, Astro can avoid sending the JavaScript code to the browser, which can make the page load faster.
It reduces the size of the page. The JavaScript code is not included in the final page, which can further improve performance.
It makes the code more maintainable. Since the JavaScript code is only executed once, it is easier to debug and maintain.
However, there are also some drawbacks to this approach:

It can be limiting. If you need to use JavaScript that is not compatible with Astro's build process, you will need to find a way to work around it.
It can be less flexible. If you need to change the JavaScript code, you will need to rebuild the page.
Overall, the decision of whether or not to use Astro's build-time JavaScript execution depends on your specific needs. If you are looking for a way to improve the performance and maintainability of your static site, then Astro's approach is a good option. However, if you need to use JavaScript that is not compatible with Astro's build process, then you may need to find a different solution.

Here are some additional things to keep in mind:

Astro can also send JavaScript to the browser, but this is done on a per-page basis, as needed. This means that you can use JavaScript to add interactivity to your pages, without having to include the JavaScript code in the frontmatter of every component.
Astro also supports server-side rendering (SSR), which means that the JavaScript code can be executed on the server before the page is sent to the browser. This can further improve performance, but it can also make the development process more complex.*/

/* 
In a website, build time is the time it takes to convert the source code of a website into a live website that can be viewed by users. This includes the time it takes to compile the code, minify the assets, and deploy the website to a server.

The build time can vary depending on the size and complexity of the website, as well as the tools and technologies used to build it. For a simple website, the build time may be just a few seconds. However, for a complex website with a lot of code and assets, the build time can be minutes or even hours.

There are a number of factors that can affect the build time of a website, including:

The size and complexity of the website
The tools and technologies used to build the website
The performance of the computer or server used to build the website
The network bandwidth available
There are a number of things that can be done to reduce the build time of a website, including:

Using a content management system (CMS) that can generate static pages from dynamic content
Using minification tools to reduce the size of the website's assets
Using caching to store the results of the build process
Using a CDN to deliver the website's assets from a network of servers
The build time of a website is an important factor to consider when planning and developing a website. By understanding the factors that affect the build time, you can take steps to reduce the build time and make your website more efficient. */