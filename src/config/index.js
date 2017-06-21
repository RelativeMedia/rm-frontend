const setupConfig = (environment) => {
  const _config = {
    API_URL: (environment === 'development') ? 'http://localhost:1337/v1' : 'https://api.relative.media/v1',
    APP_TITLE: 'Relative Media | Create.Manage.Develop | Web Development & Systems Administration',
    GOOGLE_GEOCODE_API_KEY: 'xxxx',
    LOG_ROCKET_APP_ID: 'xxxx',
    routes: [
      {
        name: 'Home',
        path: '/home',
        id: 'home'
      },
      {
        id: 'about',
        path: '/about',
        name: 'About'
      },
      {
        id: 'services',
        path: '/services',
        name: 'Services'
      },
      {
        id: 'contact',
        path: '/contact',
        name: 'Contact'
      },
      {
        id: 'blog',
        path: 'https://blog.relative.media',
        name: 'Blog',
        external: true
      }
    ]
  }

  return _config
}
export default setupConfig(process.env.NODE_ENV)
