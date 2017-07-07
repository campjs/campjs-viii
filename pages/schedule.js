import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text
} from '../components'

export default () => (
  <Wrapper title='Sessions'>
    <Text mb={6}>
      Note that attendance to the sessions are optional. There will be 2 to 3 sessions going at a time depending on scheduling but feel free to hangout in the main hall and hack on your own thing or collaborate with others.
    </Text>

    <Talk
      speaker='Glen Maddern'
      twitter='glenmaddern'
      title='Styled Components and the Road to Unification'
      profilePicture='https://avatars0.githubusercontent.com/u/23264?v=3&s=460'
    >
      <Text>It seems inevitable. As we’ve moved to a more component-centric UI architecture, we’ve moved our JS and HTML and CSS closer and closer together. Surely they’ll eventually end up all in a single file, right?</Text>
      <Text>Not long ago, this idea was unthinkable—our units of composition were too large and divided along language boundaries. But things are changing.</Text>
      <Text>This is a talk about the dream of a unified development language for components, and the progress one library, Styled Components, has made towards that goal.</Text>
    </Talk>

    <Talk
      speaker='Anna Gerber'
      twitter='AnnaGerber'
      github='AnnaGerber'
      title='Do you want to build a robot? ❄️ 🎵  🤖'
      profilePicture='https://pbs.twimg.com/profile_images/855307168035127297/tmj1L_AA_400x400.jpg'
    >
      <Text>This session will show you how to take your robotics and IoT dreams and make them reality through the magic of JavaScript, including:</Text>
      <Text>selecting hardware and developing circuits,</Text>
      <Text>overview of some of the different options for developing programs to read from sensors and control actuators for robotics and IoT projects using JS,</Text>
      <Text>connecting your device and getting it talking with other devices and services</Text>
    </Talk>

    <Talk
      speaker='Venus Izadi'
      twitter='VenusIzadi'
      github='Venus-Izadi'
      title='Contribute to Open Source projects with humanity and social impacts'
      profilePicture='https://pbs.twimg.com/profile_images/583497023267024896/Ss9lgNq4_400x400.png'
    >
      <Text>
        Objective:
      </Text>
      <Text>
        This workshop will present different open source projects that have had effects on social and humanitarian issues, and different ways that participants can contribute in these projects. Participants will be briefly shown what Open Source is, and why it’s important for everyone to get involved in that. Also, this workshop will present a step-by-step collaborative approach to contribute, using GitHub version control.
      </Text>
      <Text>
        Targeted audience:
      </Text>
      <Text>
        It is intended for any individual with any background who are willing to make changes in social & humanitarian issues. Technical part of the workshop designed for participants with Beginners programming skills.
      </Text>
    </Talk>

    <Talk
      speaker='Tommy-Carlos Williams'
      twitter='theRealDevgeeks'
      title='It’s Been Too Long Since You Last Looked At PhoneGap'
      profilePicture='https://avatars2.githubusercontent.com/u/554999?v=3&s=460'
      sponsor='adobe.com'
    >
      <Text>
        “I tried it once, it was just too slow”. It’s a refrain I hear too often, but in the fast paced world of development (especially JavaScript) when was the last time that something was still the same as it was years ago? PhoneGap and Cordova are no exception. With the proliferation of faster hardware, better and more up to date webviews, and cutting edge JS frameworks... Hybrid App Development could be the solution you need. Between the rapid development cycle, the benefit of using existing web domain knowledge, a path to publishing PWAs for platforms that support it, and the potential for a large amount of shared code... isn’t it time you gave it another look?
      </Text>
    </Talk>

    <Talk
      speaker='Jessica Edwards'
      twitter='jsscclr'
      github='jsscclr'
      title='The Generic Sensor API'
      profilePicture='https://pbs.twimg.com/profile_images/775838525388230656/DwCEKdHO_400x400.jpg'
    >
      <Text>The Generic Sensor API is a specification that provides browser vendors a framework for implementing APIs accessing hardware features. What does that mean for developers? For the first time, it's possible to play with a whole new range of sensors, such as the accelerometer, gyroscope and magnetometer. This talk will cover the current state of the Generic Sensor API, the APIs built on top of it, and how you can get started using sensors via the web!</Text>
    </Talk>

    <Talk
      speaker='Julie Grundy'
      twitter='stringy'
      title='Inclusive Javascript'
      profilePicture='https://pbs.twimg.com/profile_images/677060503236055040/h3j-XCJP_400x400.jpg'
    >
      <Text>Javascript can make a drastic change to your site for people with disabilities, depending on how you use it. It can either lock them out of your amazing product, or open up new worlds of internet possibility. I'll discuss the accessibility API, device independence and what the hell all that ARIA stuff is for, with real world examples. You'll learn techniques and best practices you can start applying today to make sure all of your hard work reaches the widest possible audience.</Text>
    </Talk>

    <Talk
      speaker='Marcos Caceres'
      twitter='marcosc'
      github='marcoscaceres'
      title='Using the Web Payments API'
      profilePicture='https://pbs.twimg.com/profile_images/840576690946433024/2PP_TLIJ_400x400.jpg'
      >
        <Text>
          💰Learn how to integrate the W3C’s new Payment Request API into a payment flow (shipping in Chrome, Edge, and soon Firefox).
        </Text>
        <Text>
          💰Signal which payment instruments can be used (e.g., credit cards, Android Pay, etc.),
        </Text>
        <Text>
          💰how to guide users to fix things when things go wrong.
        </Text>
        <Text>
          The Internets, it’s serious business! 📈
        </Text>
    </Talk>

    <Talk
      speaker='James Kyle'
      twitter='thejameskyle'
      github='thejameskyle'
      title='How to build a type checker'
      profilePicture='https://pbs.twimg.com/profile_images/879650512689184768/joE91luO_400x400.jpg'
      >
        <Text>Types are everywhere, strings, booleans, numbers, objects, every value and expression in your code has a type. In JavaScript, we never really see these types until something has gone wrong. But new type checkers like Flow or TypeScript bring them front and center, letting you write these types and see things going wrong earlier on. But how do they do it? Well, we're going to build a super tiny type checker together and see exactly how they work. It's much simpler than you might think and you'll learn about all sorts of data structures and patterns along the way.</Text>
    </Talk>

    <Talk
      speaker='Isabell Kiral-Kornek'
      twitter='isa_kiko'
      github='isakiko'
      title='Workshop: Visualizing Data Using D3'
      profilePicture='https://avatars1.githubusercontent.com/u/6100885?v=3&s=460'
    >
      <Text>
        Open science should be visible science. And what better way to make your research visible and accessible than putting it on the internet. But no one wants to read endless tables of data. We’d rather look at graphs, or, even better, have the possibility of interacting with the data. And we have probably all created some graphs. But in order to make them accessible to many people, we will have to move away from our specialized software to a more universal platform - the internet.
      </Text>
      <Text>
        We want to display our data on a website to increase visibility and accessibility of our research. Our goal is to create a dynamic bubble plot (a prettier version of a scatter plot) and publish it on the internet.
      </Text>
    </Talk>

    <Talk
      speaker='Sirani McNeill'
      twitter='mcne65'
      github='mcne65'
      title='JavaScript Rocks - Do’s and Don’t!'
      profilePicture='https://pbs.twimg.com/profile_images/866265838281572352/5rTQxWWX_400x400.jpg'
    >
      <Text>
        Talk about the basics of Javascript before moving into the NodeJS/AngularJS about server scripting and how they can impact work life before DevOps actually starts working in. Discuss how marketing content can work here.
      </Text>
    </Talk>

    <Talk
      speaker='Ash Kyd'
      twitter='ashkyd'
      github='ashkyd'
      title='WebAssembly 101'
      profilePicture='https://avatars1.githubusercontent.com/u/49600?v=3&s=460'
    >
      <Text>
        With competition between browser vendors heating up, Javascript performance has improved greatly over the past decade, but now WebAssembly is set to change the game. Introducing a new binary format that brings near-native speeds, WebAssembly is a completely different way of thinking about web development. So what does this mean for Javascript, security, and the web platform as a whole?
      </Text>
      <Text>
        In this talk we’ll go through some history before diving into how it all fits together and how you can start using it today.
      </Text>
    </Talk>

    <Talk
      speaker='Jessica Edwards'
      twitter='jsscclr'
      github='jsscclr'
      title='The JavaScript Workers: An Introduction to Web & Service Workers'
      profilePicture='https://pbs.twimg.com/profile_images/775838525388230656/DwCEKdHO_400x400.jpg'
      >
        <Text>
            Historically, we have developed web applications with the assumption that the end user is connected to the internet. With the ever increasing browser support of Service Workers, however, this assumption is quickly becoming outdated: developers now have the opportunity to create websites that can work offline, independent of network status, with great flexibility.
        </Text>
        <Text>
            But let’s take a step back: what is the Service Worker API? How does it enable developers to develop web applications with offline capabilities? To help answer these questions, one should look to its predecessor: the Web Worker API. By understanding what the Web Worker API provides us (and what it doesn’t), we can better understand Service Workers and how to use them.
        </Text>
    </Talk>

    <Talk
      speaker='Dominik Dumaine'
      twitter=''
      github='Bondifrench'
      title='Machine Learning and Javascript'
      profilePicture='https://avatars1.githubusercontent.com/u/4905917?v=3&s=460'
    >
      <Text>
        Musings about trying to find the right Javascript library to do Machine Learning in the browser (if time permitted, we'll build our own neural network).
      </Text>
    </Talk>

    <Talk
      speaker='Mark Dalgleish'
      twitter='markdalgleish'
      github='markdalgleish'
      title='A Unified Styling Language'
      profilePicture='https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1_400x400.jpg'
    >
      <Text>
        In the past few years, we’ve witnessed a massive increase in the amount of CSS experimentation, with ideas like CSS Modules and—most controversially—the rise of CSS-in-JS. But does mixing our styles and logic run counter to the original ideas of CSS? Does it break progressive enhancement?
      </Text>
      <Text>
        In this talk, we’ll take an empathetic look at these new approaches, how they relate to the history of CSS, and why they might possibly hold the key to the future of CSS—all from the point-of-view of someone who has been writing CSS since 1999.
      </Text>
    </Talk>

    <Talk
      speaker='Sebastian Porto'
      twitter='sebasporto'
      github='sporto'
      title='Elm Workshop'
      profilePicture='https://pbs.twimg.com/profile_images/1693853969/profile_400x400.jpg'
    >
      <Text>
        A basic introduction workshop to the Elm programming language.
      </Text>
    </Talk>

    <Talk
      speaker='Matt Way'
      twitter='_MattWay'
      github='matt-way'
      title='Building an API with GraphQL and AWS Lambda'
      profilePicture='https://pbs.twimg.com/profile_images/793336312799629312/V4Hogv3d_400x400.jpg'
    >
      <Text>
        Matt Way shows us the power of GraphQL and demonstrates why it’s 2017’s most desired tech with his implementation built on AWS Lambda.
      </Text>
    </Talk>

    <Talk
      speaker='Patrick Quinn-Graham'
      twitter='thepatrick'
      github='thepatrick'
      title='New Javascript is the best Javascript'
      profilePicture='https://avatars3.githubusercontent.com/u/7331?v=3&s=460'
    >
      <Text>
        With the latest version of node and the latest browsers, lots of the cool parts of ESnext are available to use now. Modules? Yep! Async/await? Yep! Let’s see how they can a code base better and easier to develop with.
      </Text>
    </Talk>

    <Talk
      speaker='Fraser Xu'
      twitter='fraserxu'
      github='fraserxu'
      title='Mad science with Electron'
      profilePicture='https://pbs.twimg.com/profile_images/378800000648266061/4998a0fdebe3ff5d8425862ca3bbbe1b_400x400.jpeg'
    >
      <Text>What do you think Electron can do? Atom text editor? Slack chat? Hyper Terminal? More than that.</Text>
      <Text>In my talk, I will go from my experience for building a production ready commercial desktop application to useful command line tool to mind blow mad science p2p live video chat(not unlike PipeChat in Silicon Valley).</Text>
      <Text>It will cover:</Text>
      <Box>* basic feature of using Electron build user interface(alone with a native Golang binary file running inside the app)</Box>
      <Box>* as a headless browser to build command line too</Box>
      <Box>* hidden browser only feature that could be "abused" from a hardware device like Raspberry Pi</Box>
    </Talk>

    <Talk
      speaker='Adam Brady'
      twitter='adam__brady'
      github='SomeoneWeird'
      title='Building products for developing countries at massive scale'
      profilePicture='https://pbs.twimg.com/profile_images/440837185948770304/TUmMQOzR_400x400.png'
    >
      <Text>
        iflix is one of the largest SVOD services for developing countries in the world, going from 0 to 1 million users in less than six months, and adding on many more millions ever since. Unlike western and first-world countries, many users don’t have the luxury of a functioning broadband connection. So how do you get your service to users in Nigeria - when nobody has a computer, and mobile data is at an extreme premium? This talk will cover everything from using Lambda & S3 for serving content, to maintaining Kubernetes for realtime services, all the way to deploying our own mini-CDN across Asia, Africa and the Middle East.
      </Text>
      <Text>
        Topics;
      </Text>
      <Text>
        Frontend: RiotJS + Webpack for ’static’ loading. Build different bundles for users in different countries to optimise languages etc
      </Text>
      <Text>
        Lambda: great for tracking ’async’ reqs. Not good to use for realtime because of latency in these countries.
      </Text>
      <Text>
        S3: Static EVERYTHING. Can be cached at edge nodes instead of having to travel back to nearest region w/ AWS DC
      </Text>
      <Text>
        Physical infra: Deliver everything way faster than using traditional internet. Install servers in local internet hubs & in Telcos.
      </Text>
      <Text>
        CDN: Akamai/CF. End user traffic only has to hit local edge node, which is then sent over the internet using CDN connection rather than users slow internet connection. Also caching.
      </Text>
      <Text>
        Kubernetes: Helps us maintain massive scale, runs all our realtime services, dynamic autoscaling etc.
      </Text>
      <Text>
        + more (time permitting)?
      </Text>
    </Talk>

    <Talk
      speaker='Glen Maddern'
      twitter='glenmaddern'
      title='Styled Components Informal Workshop'
      profilePicture='https://avatars0.githubusercontent.com/u/23264?v=3&s=460'
    >
      <Text>If you're interested in Styled Components or CSS-in-JS in general Glen will be answering questions and demonstrating techniques to solve common problems. You're welcome to ask for feedback or advice on your own projects if you like, or simply listen to the discussion & follow along the examples.</Text>
      <Text>Drop in and out. No fixed program.</Text>
    </Talk>


    <Talk
      speaker='Josh Wulf'
      twitter='sitapati'
      github='jwulf'
      title='Magikcraft - Modding Minecraft with JavaScript'
      profilePicture='https://pbs.twimg.com/profile_images/823125792418775040/xUkDmp_8_400x400.jpg'
    >
      <Text>
        Magikcraft is the world’s most advanced platform for learning to code JavaScript using Minecraft. The Magikcraft Open Source Platform is also the fastest way to write Minecraft mods in real-time in JavaScript using only a web-browser. We could do a hackathon at CampJS and produce cool mods for kids around the world to play with. Magikcraft integrates with GitHub, and has an API editor that allows you to write APIs that kids can code to.
      </Text>
    </Talk>

    <Talk
      speaker='Kory Nunn'
      twitter='korynunn'
      github='korynunn'
      title='Practical Async - Tools, Techniques, Debugging.'
      profilePicture='https://pbs.twimg.com/profile_images/720913876426956800/KfIZg83P_400x400.jpg'
    >
      <Text>
        I'll run through a range of tools and techniques used to handle asynchronous operations that occur in the real world, address some the pain points of each method, and try to present an enjoyable and productive solution.
      </Text>
    </Talk>

    <Talk
      speaker='Josh Wulf'
      twitter='sitapati'
      github='jwulf'
      title='Why JavaScript Rules The World'
      profilePicture='https://pbs.twimg.com/profile_images/823125792418775040/xUkDmp_8_400x400.jpg'
      >
        <Text>
          In literally the best techentertainment talk of all time, you’ll learn how JavaScript - the "one true full-stack language" - inherited the Earth, and why it should a mandatory part of any civilised human’s education, along with reading, writing, and ’rithmetic. You will also become proficient in functional programming in JavaScript as a side-effect of the talk, resolve once and for all whether or not to use types in JavaScript, and learn how to build a startup from nothing to a global empire, using nothing but JavaScript and a web browser.
        </Text>
    </Talk>

    <Talk
      speaker='Ben O’Neal'
      twitter=''
      github='benoneal'
      title='Event Sourcing: Redux’s Big Brother'
      profilePicture='https://avatars3.githubusercontent.com/u/4063875?v=3&s=460'
    >
      <Text>
        Exploring the power of event sourcing to manage state and business logic in a production javascript application. Examples include handling transactional and behavioural emails, user analytics, and reporting.
      </Text>
    </Talk>

    <Talk
      speaker='Luke John'
      twitter='luke__john'
      github='luke-john'
      title='Glamorous: The Beauty And Elegance Your Codebase Deserves'
      profilePicture='https://pbs.twimg.com/profile_images/633068226704838656/PsFUXh3P_400x400.jpg'
    >
      <Text>
        It's lovely making things beautiful, styles are no exception.  It's also great to make things beautiful in an elegant way.
      </Text>
      <Text>
        Traditional styling patterns and frameworks require context switching when writing styles for components. They make it hard to share logic between your applications content/structure and styles. You are also required to setup build configuration or use client side parsers which add complexity and performance concerns to your codebase.
      </Text>
      <Text>
        Glamorous has an elegant api that allows you to write style components that follow react patterns, are easy to test and don’t require extensive configuration or expensive parsers. It allows you to write your application styles in the same language, using the same patterns as the rest of your code base.
      </Text>
      <Text>
        This talk covers the what and why of glamorous, how it helps you write beautiful code and elegantly structured applications and why it's a great css-in-js community to contribute to.
      </Text>
    </Talk>

    <Talk
      speaker='Josh Gillies'
      twitter='joshgillies'
      github='joshgillies'
      title='Framework Agnostic Frontend Components'
      profilePicture='https://pbs.twimg.com/profile_images/586905623486300162/c_wt9mKz_400x400.jpg'
      sponsor='iflix'
    >
      <Text>
        Lets face it, frameworks lead to lock in. Every project eventually reaches a point where the original requirements that drove you to chose that specific UI framework have now changed, and now your only option is to start again from scratch.
      </Text>
      <Text>
        As a thought experiment, what if developing against UI frameworks didn't result in framework lock-in, what if the components that comprised your UI were agnostic to the framework that managed them, and what if adopting a new UI framework didn't result in a complete ground up rewrite? What would that mean for you as a developer? In this talk I'll explore UI components from the ground up, and what it means to develop truely portable UI components.
      </Text>
      <Text>
        Spoiler: this isn't a WebComponents/CustomElements talk.
      </Text>
    </Talk>

    <Talk
      speaker='Brendan Graetz'
      twitter='bguiz'
      github='bguiz'
      title='Jest for API servers'
      profilePicture='https://pbs.twimg.com/profile_images/484493905845444608/sTWF1Uz7_400x400.png'
    >
      <Text>Having built an API server in NodeJs, and testing it using mocha+chai+sinon, we migrated the tests over to Jest. There were several hard-won lessons along the way, which requires one to change the way they approach writing tests. Some of the paradigms involved are:</Text>
      <Box>1. Framework vs library</Box>
      <Box>2. DRY vs DAMP</Box>
      <Box>3. snapshotting</Box>
      <Box>4. chained APIs</Box>
      <Box>5. warping test time</Box>
      <Text>Who this talk is for:</Text>
      <Box>1. Jest was developed by FB, and they primarily use it to test in-browser Javascript, and is engineered tightly to work with ReactJs (also developed by FB). That being said, Jest is on its own a very versatile test framework. This talk is for those who would like a perspective of the more "general" use case for Jest.</Box>
      <Box>2. Jest is also the new kid on the block, with mocha and other test frameworks having been around for much longer. This talk is for those who are using one of these other test frameworks on their existing projects, and considering switching to Jest.</Box>
    </Talk>

    <Talk
      speaker='Mikey Williams'
      twitter='ahdinosaur'
      github='ahdinosaur'
      title='luddite.js'
      profilePicture='https://avatars2.githubusercontent.com/u/719605?v=3&s=460'
    >
      <Text>
        Fellow JavaScript lovers. I wish to talk with you about the recent surge of complexity: ES2015 and beyond. forces among us wish to no longer share minimal primitives that allow us to each explore higher level patterns in vibrant module ecosystems. rather, in exchange for the sweet syntactic sugar of progress, our masters at TC39 have forced you to accept their high-level opinions as your core abstractions.
      </Text>
      <Text>
        If you wish to go on an adventure, I offer an alternative where systems are easily composed using only the simple abstractions of functions and objects. i'll go over common higher-level abstractions and show alternatives to popular trends using only these minimal primitives. i'll also a share two personal stories about doing this in practice, one of great success and one of terrible failure. :)
      </Text>
    </Talk>

    <Talk
      speaker='Colin Scott'
      twitter='AbstractCode'
      github='ColinScott'
      title='Random Failures of Architecture I Have Committed'
      profilePicture='https://pbs.twimg.com/profile_images/3023199712/d010574bc090a7510f54ccfca7c26e44_400x400.jpeg'
    >
      <Text>Everyone loves to talk themselves up in conference presentations, regaling you with tales of their technical brilliance. Sure these talks can be filled with valuable information about the latest technologies, but have you ever stopped to consider how it makes you, the audience, feel? After you’ve spent the weekend hearing about reactively programmed event sourced games running in the cloud isn’t hard to go back to writing CRUD forms using ASP.NET WebForms 3.5 against an Access DB? Don’t you want someone to stand up and tell you all the ways they've screwed up so you can feel better about the code that awaits you on Monday?</Text>
      <Text>This is that talk.</Text>
      <Text>
        It’s taken Colin 17 years to learn these things through failures big and small. Now you can learn such classic mistakes as inappropriate layering, leaky abstractions, reimplementing perfectly valid frameworks because reasons, undervaluing the cost of development friction, and so much more. All this (probably, maybe) in just one session the length of which I did not bother to research. Yours to take away so you can laugh smugly at me when you fail to do so in your career*.
      </Text>
    </Talk>

    <Talk
      speaker='Joachim Bachstätter'
      twitter='Bachstatter'
      github='Bachstatter'
      title='What we’ve learned and can learn from functional programming'
      profilePicture='https://pbs.twimg.com/profile_images/686116338461310976/G6eqk-V7_400x400.jpg'
      sponsor='https://small.mu'
    >
      <Text>
        I plan to  start off by going over some functional patterns that are popular in the javascript community. Examples include pure functions and immutabillty.
      </Text>
      <Text>
        After that I will be taking a deep dive in some patterns that's not popular in javascript but heavily used in functional programming. Topics include the power of curry, composing all the things and abstract data types (ADT).
      </Text>
      <Text>
        - I will talk about a simple box, Maybe, Either and Task.
      </Text>
      <Text>
        - How the laws of composition can help us or our tools optimize code.
      </Text>
      <Text>
        - What’s category theory got to do with all of this.
      </Text>
    </Talk>

    <Talk
      speaker='Christopher Biggs'
      twitter='Unixbigot'
      github='Unixbigot'
      title='Javascript Rules my Life - Building IoT devices with JS'
      profilePicture='https://pbs.twimg.com/profile_images/783931036052795392/WEBMqk0N_400x400.jpg'
    >
      <Text>
        This presentation explains how to use the ESP8266 and ESP32 microcontollers, Mongoose OS, Amazon IoT and Amazon lambda to hook physical devices to your phone or to your slack channels.
      </Text>
      <Text>
        Examples: voice control your lights.  Send slack alerts on events like kettle boiled or toast ready.  Make a visual "away board" that responds to slack status.  Build "traffic light" status monitors for your CI.
      </Text>
      <Text>
        I will teach you how to get started with no soldering, 100% JavaScript, and as little as $10 of parts ($30 for a kickass setup).
      </Text>
    </Talk>

    <Talk
      speaker='Josh Johnston'
      twitter='joshwnj'
      github='joshwnj'
      title='Dear Diary: journal writing for devs'
      profilePicture='https://pbs.twimg.com/profile_images/730888592654897152/Y-KVHDyp_400x400.jpg'
      sponsor='https://x-team.com'
    >
      <Text>
        I can still hear the voice of my year 8 english teacher: "if you want to improve your writing: write! Get a diary and write in it every day".
      </Text>
      <Text>
        20 years later, I finally took that good advice.  Now I consider journal-writing to be one of the most valuable habits a programmer can have. And where it is enriching for any developer at any stage of their career, it is an essential discipline for those who work remotely or as part of a distributed team.
      </Text>
      <Text>
        In this talk I will share my experiences from the last few years of writing a developer journal and working in distributed teams. I'll cover some of the "why" questions and some of the reasons I find it so worthwhile. I'll also introduce some easy techniques, so that anyone in the audience who is keen can start right away. I'll wrap up with some exploration into how I see this fitting in with the past, present & future of the web.
      </Text>
    </Talk>

    <Talk
      speaker='Robert Kerr'
      twitter='robrkerr'
      github='robrkerr'
      title='Workshop: 3D Animation with ThreeJS'
      profilePicture='https://avatars3.githubusercontent.com/u/478084?v=3&s=460'
      sponsor='https://seermedical.com/'
    >
      <Text>
        Three.js allows you to create and display animated 3D graphics in a web browser, adding not just another spatial, but also a temporal dimension. Three.js is a JavaScript library, which is good, because every browser can interpret our JavaScript code. It interacts with WebGL, which is the browser’s way to interact with the user’s graphics card
      </Text>
    </Talk>

    <Talk
      speaker='Joshua Paling'
      twitter='joshuapaling'
      github='joshuapaling'
      title='Copy-paste-pray? No way!'
      profilePicture='https://pbs.twimg.com/profile_images/529152338137608192/1usA8Wsu_400x400.jpeg'
    >
      <Text>
        This is a talk about understanding complex terminal commands.
      </Text>
      <Text>
        At work, we recently set up a git pre-commit hook to run prettier on changed javascript files as part of each commit. It was one big long linux command, that I found online, then tweaked for our own project. Here's the command:
      </Text>
      <Text>
        git diff --staged --diff-filter=dx --name-only HEAD | grep -E '.*\\.(js|jsx)$' | grep -v ^public/ | xargs -I % sh -c 'prettier --single-quote --trailing-comma es5  --write %; git add %'
      </Text>
      <Text>
        This talk is about understanding this command - and other such linux commands. We'll spend about 15m going through fundamental linux concepts:
      </Text>
      <Text>
          - philosophy of small, composable commands
      </Text>
      <Text>
          - everything is a file"
      </Text>
      <Text>
          - The 3 "standard" streams - STDIN, STDOUT, STDERR
      </Text>
      <Text>
          - Redirecting the 3 standard streams
      </Text>
      <Text>
          - Joining commands with pipes
      </Text>
      <Text>
          - Using xargs to convert standard input to arguments
      </Text>
      <Text>
          - Using explainshell.com for quickly understanding commands you've found on the internet
      </Text>
      <Text>
        We'll work through small, self-contained examples each step of the way.
      </Text>
      <Text>
        At the end, armed with this knowledge of how linux commands work, we'll come back and tackle our original command. We'll spend ~ 10m breaking it down step by step, and explaining how it works, and which of the features listed above it's using.
      </Text>
      <Text>
        After the talk, people will have the foundations necessary to start moving away from the "copy-paste-pray" approach to linux commands that is all too common amongst juniors and intermediates, and start understanding commands they find online, tweaking them for their own use, and even composing their own more complex commands.
      </Text>
    </Talk>

    <Talk
      speaker='Alex Dickson'
      twitter='alexdickson'
      github='alexanderdickson'
      title='Probably Something Graphical/Niche Cool or Hardware Envelope Pushing'
      profilePicture='https://pbs.twimg.com/profile_images/468972557526253568/N2bb2YCh_400x400.jpeg'
    >
      <Text>
        ??? Who knows ???
      </Text>
    </Talk>

  </Wrapper>
)
