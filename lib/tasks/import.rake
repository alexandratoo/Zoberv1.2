require 'csv'

namespace :import do 
  desc "Import data from csv"
  task categories: :environment do 
    filename = File.join Rails.root, "categories.csv"
    CSV.foreach(filename, headers: true) do |row|
      Category.create({
    category: row[0]
      })
    end
  end 
end 


namespace :import do 
  desc "Import data from csv"
  task filters: :environment do 
    filename = File.join Rails.root, "filters.csv"
    CSV.foreach(filename, headers: true) do |row|
      Filter.create({
    category_id: row[0],
    filter: row[1]
      })
    end
  end 
end 