require 'thor'

class Manage < Thor
  include Thor::Actions

  desc 'prune', 'Limit the number of images for each service'
  method_option :back_to, type: :numeric, default: 2
  def prune
    validate_back_to options[:back_to]
    remove_unwanted_images(images, options[:back_to])
  end

  no_commands {
    def validate_back_to(back_to)
      return if back_to > 0
      raise "It does not support pruning back to #{back_to}. " \
        'Minimum value supported is 1'
    end
  }

  desc 'images', 'Images available'
  def images
    return %w(wfr-rule-designer wfr-rule-service)
  end

  no_commands {
    def remove_unwanted_images(images, back_to)
      images.each do |image|
        puts "Removing image #{image} version that belongs to version #{back_to}"
      end
    end
  }


end