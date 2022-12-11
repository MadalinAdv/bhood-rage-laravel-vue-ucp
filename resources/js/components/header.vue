<template>
<div class="header">
    <div class="header-content">
        <nav class="navbar navbar-expand">
            <div class="collapse navbar-collapse justify-content-between">
                <div class="header-left">
                    <!-- 
                <div class="dashboard_bar">
                   Home                        </div>
                -->
                </div>
                <ul class="navbar-nav header-right">
                    <li class="nav-item">
                        <div class="input-group search-area ml-auto d-inline-flex">
                            <form action="https://ragepanel.b-hood.ro/search" method="GET">
                                <input type="text" name="search" class="form-control" placeholder="Search here" required>
                                <div class="input-group-append">
                                    <button type="submit" class="input-group-text"><i class="mdi mdi-magnify fs-22"></i></button>
                                </div>
                            </form>
                        </div>
                    </li>
                    <!--
                   <li class="nav-item">
                       <a class="btn btn-primary  d-md-block d-none" href="#">
                           <i class="fa fa-cog scale5" aria-hidden="true"></i>
                       </a>
                   </li>-->

                    <li class="nav-item dropdown header-profile">
                        <a class="nav-link" href="javascript:;" role="button" data-toggle="dropdown">
                                                    <img src="https://b-hood.ro/ragephotos/skins/ig_car3guy1.png" style="border-radius: 100%" alt="Avatar image" class="avatar-skin p-1">
                                                    <div class="header-info">
                         <span> Guest <i class="fa fa-caret-down ml-3" aria-hidden="true"></i></span>
                      </div>
                   </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a href="#" data-toggle="modal" data-target="#login" class="dropdown-item ai-icon">
                      <i class="mdi mdi-login" style="font-size: 1.3rem; color: #13B497"></i>
                      <span class="ml-2">Login </span>
                      </a>
                            <a href="#" data-toggle="modal" data-target="#recovery" class="dropdown-item ai-icon">
                      <i class="mdi mdi-lock-question" style="font-size: 1.3rem; color: #13B497"></i>
                      <span class="ml-2">Recovery</span>
                      </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
</template>
<script>
    export default {
        mounted() {
            console.log('header has succesfully loaded.')
        }
    }
</script>