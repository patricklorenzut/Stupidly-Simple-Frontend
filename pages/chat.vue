<template>

  <div>        


    <header class="max-w-3xl mx-auto text-center py-20">
      <h1 class="text-5xl font-bold leading-tight">
        A Stupidly Simple and 100% Private Chat Plugin
      </h1>
      <h2 class="text-2xl mt-4">
        Copy and paste some javascript onto your site, and then you’ll have a chat bubble to make it easy for your visitors to contact you! Completely private so it’ll never get blocked by an ad blocker.
      </h2> 

    </header>    

    <section class="max-w-3xl mx-auto py-20">
        <ol>
          <li>It’s free for your first 100 messages (no credit card required). And then it’s $5 for each 1,000 messages after that. There are NO monthly fees. Only usage fees.</li>
          <li>No account needed! We’ll email you an invoice if and when it comes to that.</li>
          <li>100% Private. No cookies are used. Which means that you don’t have to add an annoying consent form to your site. And more importantly, it means that Ad Blockers will never block this chat window (unlike others).</li>
          <li>It’s ultra-lightweight. Built with vanilla JavaScript. No jQuery bloat here :)</li>
          <li>It’s stupidly simple on purpose. This is <strong>not a live chat tool</strong>. Rather it’s a convenient way for visitors to start an email conversation with you.</li>
        </ol>

    </section>

    <section class="py-20 max-w-xl mx-auto">

        <div class="bg-gray-800 p-4 font-mono text-white text-sm overflow-x-scroll">
            <pre><code>&lt;script&gt;
window.SSAChatBubbleSettings = {
    owner_email: { <span class="text-red-500">#required</span>
        one: patrick.lorenzut,
        two: gmail,
        three: com
    },
    color: #333333, <span class="text-blue-500">#optional</span>
    we: false, <span class="text-blue-500">#optional</span>
    email_list: false, <span class="text-blue-500">#optional</span>
    visior_email: null <span class="text-blue-500">#optional</span>
};
&lt;/script&gt;
&lt;script src=&quot;https://api.stupidlysimple.app/js/chatbubble.js&quot; async type=&quot;text/javascript&quot;&gt;&lt;/script&gt;</code></pre>
        </div>


        <h2>Functions</h2>
        <p>Want to interact with this chat bubble from your own application? You can!</p>
        <ol>
            <li><code>ssa_chatbubble.open()</code> opens the chat form</li>
            <li><code>ssa_chatbubble.close()</code> closes it</li>
            <li><code>ssa_chatbubble.toggle()</code> toggles it. Duh.</li>
        </ol>

        <p>Questions or feedback? <span onclick="ssa_chatbubble.open()">Let me know!</span></p>
        
    </section>    

  </div>
</template>