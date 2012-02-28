#: http://stackoverflow.com/questions/3108395/serve-current-directory-from-command-line

require 'webrick'
include WEBrick

s = HTTPServer.new(:Port => 9090,  :DocumentRoot => Dir::pwd)
trap("INT"){ s.shutdown }
s.start