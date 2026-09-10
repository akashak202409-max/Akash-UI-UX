#!/bin/bash
FILES=(
  "src/components/About/About.css"
  "src/components/Education/Education.css"
  "src/components/Experience/Experience.css"
  "src/components/Projects/Projects.css"
  "src/components/Contact/Contact.css"
)

for file in "${FILES[@]}"; do
  filename=$(basename "$file")
  name="${filename%.*}"
  classname=$(echo "$name" | tr '[:upper:]' '[:lower:]')"-section"
  
  echo -e "\n@media (max-width: 768px) {\n  .$classname {\n    padding: 3rem 1.5rem;\n  }\n}" >> "$file"
done
