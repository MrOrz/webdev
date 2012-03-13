# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'compass', :configuration_file=>'./config.rb' do
  watch(%r{^sass/(.*)\.scss})
end

# see https://github.com/psionides/jslint_on_rails
guard 'jshint-on-rails', :config_path => 'lib/jshint.yml' do
  # watch for changes to application javascript files
  watch(%r{^js/.*\.js$})
end

guard 'shell' do
  watch(%r{^vew/(.*)\.vew$}) do |m|
    `vebdew g`
    puts "Vew compiled: #{m[1]}"
  end
end

guard 'livereload' do
  watch(%r{^css/.+\.css$})
  watch(%r{^js/.+\.js$})
  watch(%r{^.+\.html$})
end
