$url = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=Tupac_Shakur&pithumbsize=500&format=json"
$response = Invoke-RestMethod -Uri $url
$pages = $response.query.pages
$firstKey = ($pages | Get-Member -MemberType NoteProperty)[0].Name
$imageUrl = $pages.$firstKey.thumbnail.source
Write-Host "Downloading $imageUrl"
Invoke-WebRequest -Uri $imageUrl -OutFile "tupac.jpg"
Write-Host "Saved as tupac.jpg"
