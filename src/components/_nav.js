export default [
  {
    _name: 'CSidebarNav',
    _children: [
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Dashboard',
      //   to: '/dashboard',
      //   icon: 'cil-speedometer',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW',
      //   },
      // },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Theme'],
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Business',
        to: '/admin/business',
        icon: 'cil-drop',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Categories',
        to: '/admin/category',
        icon: 'cil-pencil',
      },
    ],
  },
];
