<?php

namespace Kamran\DataTable;

use Illuminate\Support\ServiceProvider;

class DataTableServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Register dependencies if needed
    }

    public function boot()
    {
        $this->publishes([
            __DIR__.'/../public/js/datatable.js' => public_path('js/datatable.js'),
        ], 'public');
    }
}
