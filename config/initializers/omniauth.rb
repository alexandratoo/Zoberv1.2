OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '739899384767-ehrvsttlq8108b4gp4mvctev6kfokfeg.apps.googleusercontent.com', 'hZXkwY_Y364tnUsnHUQwXIgp', skip_jwt: true
end # need to change key ownership to tyler, using my own google account for development
