<template>

  <div>        

    <div class="bg-teal-100 bg-cover" style="background-image: url(/images/shape-bg.png)">
      <header class="max-w-4xl mx-auto text-center py-20 lg:py-40 px-10">
        <h1 class="text-5xl font-bold leading-tight">
          A Simple, Private Chat Widget
        </h1>
        <h2 class="text-2xl mt-4">
          Copy and paste some javascript onto your site to let visitors incredibly easily (and sexily) start an email conversation with you! 100% private. 100% simple.
        </h2> 

        <div class="mt-16">         
          <template v-if="!$store.getters.isLoggedIn">
             <span class="inline-block rounded-full bg-teal-700 hover:bg-teal-800 py-5 px-10 cursor-pointer text-white uppercase font-bold" onclick="underpolished_chat.toggle()">Click to See Demo</span>
            <p class="text-teal-500 mt-3">Or <nuxt-link to="/register" class="text-red-500 hover:text-red-900">click here</nuxt-link> to create your free account.</p>
          </template>
          <template v-else>
            <p class="mb-3">Here’s your code (see below for configuration options):</p>
            <div class="bg-gray-800 p-4 max-w-md mx-auto font-mono text-white text-sm overflow-x-scroll text-left">
            <pre><code>&lt;script&gt;
window.UnderpolishedChatSettings = {
    id: {{ $store.getters.memberProfile.id }},
    token: '{{ $store.getters.memberProfile.token }}'
};
&lt;/script&gt;
&lt;script src=&quot;https://api.underpolished.com/js/chatwidget.js&quot; async type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</code></pre>
        </div>
          </template>
        </div>

      </header>  
    </div>  

    <section class="py-20 px-10 max-w-xl mx-auto">

        <h2 class="text-2xl font-bold mt-16 mb-2">The Deets</h2>
        <ul>
          <li class="my-4"><span class="text-red-500">&#10004;</span> Free for your first 100 emails (no credit card required). Then just $4 per month after that.</li>
          <li class="my-4"><span class="text-red-500">&#10004;</span> 100% Private. No cookies are used. No intrusive social plugins. No privacy-offending Google ReCaptcha. Which means that you don’t have to add an annoying consent form to your site. More importantly it means that Ad Blockers will never block this chat window (unlike others). And MOST importantly it means that you're doing your part to make the internet a better place.</li>
          <li class="my-4"><span class="text-red-500">&#10004;</span> Ultra-lightweight. Built with vanilla JavaScript. No jQuery bloat here :)</li>
          <li class="my-4"><span class="text-red-500">&#10004;</span> Stupidly simple on purpose. This is <strong>not a live chat tool</strong>. Rather it’s a convenient way for visitors to start an email conversation with you.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-20 mb-2">Installation and Configuation</h2>
        <p>There are only 6 settings! And only 4 of them are configurable. Woohoo simplicity!</p>
        <ul class="list-disc my-4">
            <li><code class="text-red-500">id</code> is what ties this code to your account. It’s how the script knows who to send the email to.</li>
            <li><code class="text-red-500">token</code> is what keeps other people from being bad.</li>
            <li><code class="text-red-500">button_text</code> lets you override the default "Email Me" or "Email Us" text.</li>
            <li><code class="text-red-500">color</code> is pretty self explanatory. Default is #333333 but you can change it to whatever you find soothing.</li>
            <li><code class="text-red-500">we</code> tells the system whether to use "I/me" pronouns or "We/us" pronouns.</li>
            <li><code class="text-red-500">visitor_email</code> is used in case you already know the email address of the visitor. Eg if you have this chat bubble installed inside of a member-only area.</li>            
        </ul>
        <p class="my-4">The MOST complicated your install could be is this:</p>
        <div class="bg-gray-800 p-4 font-mono text-white text-sm overflow-x-scroll">
            <pre><code>&lt;script&gt;
window.UnderpolishedChatSettings = {<template v-if="$store.getters.isLoggedIn">
    id: {{ $store.getters.memberProfile.id }}, <span class="text-red-500">#required</span>
    token: '{{ $store.getters.memberProfile.token }}', <span class="text-red-500">#required</span>
</template><template v-else>
    id: REGISTER_TO_GET_THIS, <span class="text-red-500">#required</span>
    token: 'REGISTER_TO_GET_THIS', <span class="text-red-500">#required</span>
    button_text: 'Click for Fun Times', <span class="text-blue-500">#optional</span>
</template>    color: '#333333', <span class="text-blue-500">#optional</span>
    we: true, <span class="text-blue-500">#optional</span>
    visior_email: 'party@lorenzut.com' <span class="text-blue-500">#optional</span>
};
&lt;/script&gt;
&lt;script src=&quot;https://api.underpolished.com/js/chatwidget.js&quot; async type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</code></pre>
        </div>


        <h2 class="text-2xl font-bold mt-20 mb-2">Functions</h2>
        <p>Want to interact with this chat bubble from your own application? You can!</p>
        <ul class="list-desc">
            <li class="mt-3"><code class="bg-gray-800 text-red-500 px-2 py-1 inline-block">underpolished_chat.open()</code> opens the chat box.</li>
            <li class="mt-3"><code class="bg-gray-800 text-red-500 px-2 py-1 inline-block">underpolished_chat.close()</code> closes it.</li>
            <li class="mt-3"><code class="bg-gray-800 text-red-500 px-2 py-1 inline-block">underpolished_chat.toggle()</code> toggles it.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-20 mb-2">How is this better than Intercom?</h2>
        <p class="mb-4">WHOAH. I never said it was better than <i>Intercom</i>. Slow your roll.</p>

        <p class="mb-4">But since you asked…</p>

        <p class="mb-4">Things tend to be relative. This is one of those things. It’s not so much that <i>Underpolished Chat</i> is “better” than <i>Intercom</i>. It’s not. You could argue that it’s far “worse”, in fact. Intercom is dope and full of some really cool features.</p>

        <p class="mb-4">But <i>Underpolished Chat</i> very well might be better than <i>Intercom</i> <b>for you</b>. </p>

        <p class="mb-4">Which is all that matters, right?</p>

        <p class="mb-4">Okay, so let’s break that down.</p>

        <p class="mb-4">Let’s say you’re flying solo. You’re a one-human-team. You’re the only one designing, developing, writing, marketing, supporting, whatevering.</p>

        <p class="mb-4">You can’t do everything. So you have to prioritize.</p>

        <p class="mb-4"><i>Intercom</i> is hella dopesauce. But let’s be realistic.</p>

        <p class="mb-4">If you’re paying for <i>Intercom</i> then, to get your money’s worth, you’re probably going to spend 40 hours configuring settings, email sequences, in-app messages, etc.</p>

        <p class="mb-4">Despite that effort you’ll get either zero or next-to-zero results.</p>

        <p class="mb-4">Why? Because you get so relatively little traffic that it doesn’t much matter if you’ve managed to squeak out an extra 1.8% efficiency.</p>

        <p class="mb-4">Subconsciously you’ll have expected to make tons of sales because of <i>Intercom</i>. When you’re a week into it and nothing’s changed, you’ll start mindf#%ing yourself, and you’ll manage to convince yourself that this lack of success is because you didn’t fine-tune your <i>Intercom</i> flow enough, so you’ll go back in and spend another 10 hours writing the perfect sequences with the perfect convoluted triggers.</p>

        <p class="mb-4">None of this is a knock on <i>Intercom</i>. No, it’s a knock on idiots like me who pay for the fanciest tool in the world even though it actually makes zero sense. I’m done being that idiot.</p>

        <p class="mb-4">Really all I needed was an attractive contact form that made it hyper-easy for people to contact me, that made me look halfway professional, and to show visitors that I care.</p>

        <p class="mb-4">So I built this. I hope it’s as marginally useful for you as it is for me!</p>

        <p class="mt-16">Questions or feedback? <span class="text-red-500 hover:text-red-900 cursor-pointer" onclick="underpolished_chat.open()">Let me know!</span></p>
        
    </section>    

  </div>
</template>
