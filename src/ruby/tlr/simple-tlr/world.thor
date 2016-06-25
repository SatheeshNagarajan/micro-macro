require 'thor'

class World < Thor

  desc 'up', 'Bring up all the images and run the containers'
  def up
    invoke :halt
    task_start_time = DateTime.now
    puts "World up Task started at #{task_start_time}"
  end

  desc 'halt', 'Stop all the containers that are currently running'
  def halt
    task_start_time = DateTime.now
    puts "Stopping all the containers Task started at #{task_start_time}"
  end

  desc 'restitch', 'Restarts single service'
  def restitch(service_name)
    task_start_time = DateTime.now
    puts "Download the new container - restitch Task started at #{task_start_time}"
    puts "Downloading service .......... #{service_name} Competed"
  end

end

