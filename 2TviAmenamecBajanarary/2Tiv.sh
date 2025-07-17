echo "enter a:"
read a 
echo "enter b:"
read b 

if ((a>b));then 
    max=a 
    min=b 
else
    max=b 
    min=a 
fi

for ((i = min; i>0; i--)); do
    d=$((min%i))
    if ((d == 0)); then
        d=$((max%i))
        if ((d == 0)); then
            echo "answer is: $i"
            break
        fi
    fi
done
