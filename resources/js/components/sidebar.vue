<template>
    <div>
        <div class="deznav">
                <div class="deznav-scroll">
                    <ul class="metismenu" id="menu">
                        <li>
                            <a :href="currentUrl" class="ai-icon" aria-expanded="false">
                                <i style="font-size: 1.3rem" class="mdi mdi-home-outline"></i>
                                    <span class="nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                        <a :href="currentUrl" class="ai-icon" aria-expanded="false">
                                <i style="font-size: 1.3rem" class="mdi mdi-account-multiple"></i>
                                    <span class="nav-text">Jucatori online</span>
                        </a>
                        </li>
                        
                    </ul>
                
                </div>
            </div>
        
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('sidebar loaded.')
        },
        data: function() {
            return {
            currentUrl: "",
            };
        },
        created() {
            this.currentUrl = window.location.href;
        },
    }
</script>
