<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{ config('app.name') }}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Rage User Panel" />
    <meta name="keywords" content="rage, samp, panel, sa-mp, sa:mp, romania, server, rpg">
    <meta name="author" content="Madalin Developments" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://i.imgur.com/hgADPd7.png">
   
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">

    <link rel="stylesheet" type="text/css" href="{{ asset('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/syle.css') }}">


    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/6.5.95/css/materialdesignicons.min.css" />

    <script>
        window.inf = {
            name: "{{ config('app.name') }}",
            url: "{{ url('/') }}",
            token: "{{ csrf_token() }}",
           
        };
    </script>
</head>
<body>
    <div id="app">
        <div id="main-wrapper">
            <nav-header></nav-header>
            <header></header>
            <sidebar></sidebar>
            <div class="content-body">
                <!-- row -->
                <div class="container-fluid">
                    <breadcrumb></breadcrumb>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>