OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '739899384767-ehrvsttlq8108b4gp4mvctev6kfokfeg.apps.googleusercontent.com', 'hZXkwY_Y364tnUsnHUQwXIgp', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end # need to change key ownership to tyler, using my own google account for development
