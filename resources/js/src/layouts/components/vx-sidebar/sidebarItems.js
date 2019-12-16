/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent



  @todo - Change this to a php driven file array, so it's translatable from the frontend
==========================================================================================*/


export default [
    {
      href: "/",
      name: "Home",
      icon: "HomeIcon",
      route: 'home.index'
    },
    {
      href: "/account",
      name: "Account",
      icon: "SlidersIcon",
      route: "account.index"
    },
    {
      href: "/settings",
      name: "Instellingen",
      icon: "IconSetting",
      route: 'settings.index'
    }
]
