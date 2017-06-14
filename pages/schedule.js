import {
  Wrapper,
  Talk,
  Box,
  NavLink,
  Text
} from '../components'

export default () => (
  <Wrapper title='Schedule'>
    <Text>
      Subject to change. More coming soon.
    </Text>
    <NavLink mb={5} bold prefetch href={'/call-for-speakers'}>Submit a talk.</NavLink>

    <Talk
      speaker='Glen Maddern'
      twitter='glenmaddern'
      title='Styled Components and the Road to Unification'
      profilePicture='https://avatars0.githubusercontent.com/u/23264?v=3&s=460'
    >
      <Text is='p'>It seems inevitable. As we’ve moved to a more component-centric UI architecture, we’ve moved our JS and HTML and CSS closer and closer together. Surely they’ll eventually end up all in a single file, right?</Text>
      <Text is='p'>Not long ago, this idea was unthinkable—our units of composition were too large and divided along language boundaries. But things are changing.</Text>
      <Text is='p'>This is a talk about the dream of a unified development language for components, and the progress one library, Styled Components, has made towards that goal.</Text>
    </Talk>

    <Talk
      speaker='Charlie Gerard'
      twitter='devdevcharlie'
      title='When the web gets physical - Web bluetooth in the browser'
      profilePicture='https://pbs.twimg.com/profile_images/440808125721870336/34QLtMdA_400x400.jpeg'
      >
        <Text>
          Connecting devices to the web has become possible with technologies like Node.js. From blinking an LED to building a smart mirror, the possibilities are endless; but something new has come! With the release of the Web Bluetooth API, BLE devices can now be connected to a browser with a simple click! This talk will take you through my journey of creating a framework to interact with the Myo armband in the browser using this brand new and shiny Web API.
        </Text>
    </Talk>

    <Talk
      speaker='Tommy-Carlos Williams'
      twitter='theRealDevgeeks'
      title='It’s Been Too Long Since You Last Looked At PhoneGap'
      profilePicture='https://avatars2.githubusercontent.com/u/554999?v=3&s=460'
    >
      <Text>
        “I tried it once, it was just too slow”. It’s a refrain I hear too often, but in the fast paced world of development (especially JavaScript) when was the last time that something was still the same as it was years ago? PhoneGap and Cordova are no exception. With the proliferation of faster hardware, better and more up to date webviews, and cutting edge JS frameworks... Hybrid App Development could be the solution you need. Between the rapid development cycle, the benefit of using existing web domain knowledge, a path to publishing PWAs for platforms that support it, and the potential for a large amount of shared code... isn’t it time you gave it another look?
      </Text>
    </Talk>

    <Talk
      speaker='Marcos Caceres'
      twitter='marcosc'
      github='marcoscaceres'
      title='Money Money Money. Moneeeey!💸'
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
      speaker='Melissa Kaulfuss'
      twitter='MelissaKaulfuss'
      title='How to be a happy developer'
      profilePicture='https://pbs.twimg.com/profile_images/445091827310284800/bWZU2x8c_400x400.png'
      >
        <Text is='p'>Some of you may wonder why this is even a talk title, because solving problems is fun, right? _Right_.</Text>
        <Text is='p'>Others however, may be more like me, a bundle of insecurity who puts immense pressure on oneself and struggles with the physical manifestation of anxiety and the mostly self inflicted stress in relation to work, life and almost everything. </Text>
        <Text is='p'>This is the tale of my first year as a developer and will outline some strategies for dealing with anxiety and juggling life and our work (which lets face it, is all consuming).</Text>
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
      speaker='Brendan Scarvell'
      twitter='menztrual'
      github='bscarvell'
      title='JavaScript Security Workshop'
      profilePicture='https://pbs.twimg.com/profile_images/841927036188950528/V4UIKU1L_400x400.jpg'
    >
      <Text>
        The JavaScript Security Workshop will provide security awareness for range of vulnerabilities commonly found in both client and server side JavaScript applications. A hands on exercise will allow you to practice your newly honed hacking skills against vulnerable applications.
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
      <Text is='p'>What do you think Electron can do? Atom text editor? Slack chat? Hyper Terminal? More than that.</Text>

      <Text is='p'>In my talk, I will go from my experience for building a production ready commercial desktop application to useful command line tool to mind blow mad science p2p live video chat(not unlike PipeChat in Silicon Valley).</Text>

      <Text is='p'>It will cover:</Text>
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
      speaker='Brendan Graetz'
      twitter='bguiz'
      github='bguiz'
      title='Jest for API servers'
      profilePicture='https://pbs.twimg.com/profile_images/484493905845444608/sTWF1Uz7_400x400.png'
    >
      <Text is='p'>Having built an API server in NodeJs, and testing it using mocha+chai+sinon, we migrated the tests over to Jest. There were several hard-won lessons along the way, which requires one to change the way they approach writing tests. Some of the paradigms involved are:</Text>
      <Box>1. Framework vs library</Box>
      <Box>2. DRY vs DAMP</Box>
      <Box>3. snapshotting</Box>
      <Box>4. chained APIs</Box>
      <Box>5. warping test time</Box>
      <Text is='p'>Who this talk is for:</Text>
      <Box>1. Jest was developed by FB, and they primarily use it to test in-browser Javascript, and is engineered tightly to work with ReactJs (also developed by FB). That being said, Jest is on its own a very versatile test framework. This talk is for those who would like a perspective of the more "general" use case for Jest.</Box>
      <Box>2. Jest is also the new kid on the block, with mocha and other test frameworks having been around for much longer. This talk is for those who are using one of these other test frameworks on their existing projects, and considering switching to Jest.</Box>
    </Talk>


    <Talk
      speaker='Colin Scott'
      twitter='AbstractCode'
      github='ColinScott'
      title='Random Failures of Architecture I Have Committed'
      profilePicture='https://pbs.twimg.com/profile_images/3023199712/d010574bc090a7510f54ccfca7c26e44_400x400.jpeg'
    >
      <Text is='p'>Everyone loves to talk themselves up in conference presentations, regaling you with tales of their technical brilliance. Sure these talks can be filled with valuable information about the latest technologies, but have you ever stopped to consider how it makes you, the audience, feel? After you’ve spent the weekend hearing about reactively programmed event sourced games running in the cloud isn’t hard to go back to writing CRUD forms using ASP.NET WebForms 3.5 against an Access DB? Don’t you want someone to stand up and tell you all the ways they've screwed up so you can feel better about the code that awaits you on Monday?</Text>

      <Text is='p'>This is that talk.</Text>

      <Text is='p'>It’s taken Colin 17 years to learn these things through failures big and small. Now you can learn such classic mistakes as inappropriate layering, leaky abstractions, reimplementing perfectly valid frameworks because reasons, undervaluing the cost of development friction, and so much more. All this (probably, maybe) in just one session the length of which I did not bother to research. Yours to take away so you can laugh smugly at me when you fail to do so in your career*. Vote now but don't send any money.</Text>

    </Talk>

    <Talk
      speaker='Joachim Bachstätter'
      twitter='Bachstatter'
      github='Bachstatter'
      title='What we’ve learned and can learn from functional programming'
      profilePicture='https://pbs.twimg.com/profile_images/686116338461310976/G6eqk-V7_400x400.jpg'
    >
      <Text>
        I plan to  start off by going over some functional patterns that are popular in the javascript community. Examples include pure functions and immutabillty.
      </Text>
      <Text>
        After that I will be taking a deep dive in some  patterns thats not popular in javascript but heavily used in functional programming. The focus will be on abstract data types (ADT) . What they are, how to use them and maybe most important,  why to use them.
      </Text>
      <Text>
        -  I will talk about a simple box, Maybe, Either and Task.
      </Text>
      <Text>
        - How the laws of composition can help us or our tools optimize code.
      </Text>
      <Text>
        - What’s category theory got to do with all of this.
      </Text>
    </Talk>

    <Talk
      speaker='Isabell Kiral-Kornek'
      twitter='isa_kiko'
      github='isakiko'
      title='Visualizing Data Using D3'
      profilePicture='https://avatars1.githubusercontent.com/u/6100885?v=3&s=460'
    >
      <Text>
        Open science should be visible science. And what better way to make your research visible and accessible than putting it on the internet. But no one wants to read endless tables of data. We’d rather look at graphs, or, even better, have the possibility of interacting with the data. And we have probably all created some graphs. But in order to make them accessible to many people, we will have to move away from our specialized software to a more universal platform - the internet.
      </Text>
      <Text>
        We want to: Display our data on a website to increase visibility and accessibility of our research. Our goal is to create a dynamic bubble plot (a prettier version of a scatter plot) and publish it on the internet.
      </Text>
      <Text>
        Along the way, we will learn:
      </Text>
      <Text>
        how to create our first own web page
      </Text>
      <Text>
        how to change the appearance of certain elements on the page
      </Text>
      <Text>
        how to integrate graphical elements into our page
      </Text>
      <Text>
        how to publish our page
      </Text>
      <Text>
        how to allow interaction with elements
      </Text>
      <Text>
        how to store data for the use in webpages
      </Text>
      <Text>
        how to create a graph in D3
      </Text>
    </Talk>

    <Talk
      speaker='Robert Kerr'
      twitter='robrkerr'
      github='robrkerr'
      title='3D Animation with ThreeJS Workshop'
      profilePicture='https://avatars3.githubusercontent.com/u/478084?v=3&s=460'
    >
      <Text>
        Three.js allows you to create and display animated 3D graphics in a web browser, adding not just another spatial, but also a temporal dimension. Three.js ia a JavaScript library, which is good, because every browser can interpret our JavaScript code. It interacts with WebGL, which is the browser’s way to interact with the user’s graphics card
      </Text>
    </Talk>

  </Wrapper>
)
