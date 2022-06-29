@users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end 
end

# front end needs to make an api call to the backend json is the response from the api
# sends back json object

# hash is being sent back as json string, library in front end parses it 

# without json we cant get responses from the backend
# back end makes request to databse
