<template>
    <footer>
        <div class="container text-center text-gray-500 p-4">
            <p>Copyright © 2020 Underpolished. Built by <a href="https://lorenzut.com" target="_blank" class="text-red-500 hover:text-red-900">Patrick Lorenzut</a>. All rights reserved, I think. But I’m not a lawyer.</p>
        </div>

        <script type="text/javascript">
            window.UnderpolishedTitles = "Your mom. 👩‍🦰///Come baaaack!!!///Hey. 😗///I miss you. 😍///🤢 That site sucks!"
        </script>
        <script :src="api_url + '/js/twister.js'" async type="text/javascript"></script>

        <script>
        window.UnderpolishedChatSettings = {
            token: 'sQ034aCjacnURvpN',
            id: 1,
            color: '#42438b'
        };
        </script>
        <script :src="api_url + '/js/chatwidget.js'" async type="text/javascript"></script>

        <script async defer src="https://lol.underpolished.com/app.js"></script>
        <noscript><img src="https://lol.underpolished.com/image.gif" alt=""></noscript>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                api_url: process.env.baseApiUrl,
            };
        },       
    }
</script>