<template>

  <div>        

    <div>
      <header class="max-w-4xl mx-auto text-center py-20 lg:py-40 px-10 pb-0">
        <h1 class="text-5xl font-bold leading-tight">
          Stupidly Simple Leads For Your SaaS
        </h1>
        <h2 class="text-2xl mt-4">
          Enter 2-10 Twitter accounts and this tool will generate a report of mutual followers of those accounts... letting you get feedback (and sales) from hyper-targeted personality types.
        </h2> 

      </header>  
    </div>  

    <section class="py-20 pt-0 px-10 max-w-xl mx-auto">

        <form action="/report/new" method="post" class="auth-form">
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder="@tferriss"/>
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder="@brenebrown"/>     
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder="@thisissethsblog"/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/> 
            <input type="text" name="twitter_handle_1" value="" class="mb-3" required placeholder=""/>               

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-4" type="button" native-type="submit">
                Find Targeted Leads
            </button>
            
            <p class="text-sm text-gray-500">A free sample will be generated for you. Cost for the full report is $1 per 5,000 followers analyzed. <a class="text-red-500 hover:text-red-900" href="/report/35" target="_blank">View example.</a></p>
        </form>


        <h2 class="text-2xl font-bold mt-16 mb-2">Why?</h2>
        <p>I asked a friend how to do customer outreach for <a class="text-red-500 hover:text-red-900" href="https://forhumansake.org" target="_blank">For Human Sake</a>. He responded by asking who my target audience was. I answered "basically a hybrid of Tim Ferriss fans and Brené Brown fans." And thus this tool was born.</p>

        <p class="mt-16">Questions or feedback? <span class="text-red-500 hover:text-red-900 cursor-pointer" onclick="ssa_chatbubble.open()">Let me know!</span></p>
        
    </section>    

  </div>
</template>