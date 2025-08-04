

#!/bin/bash
echo "Enter a:"
read a
echo "Enter b:"
read b

if ((a > b)); then
    max=$a
    min=$b
else
    max=$b
    min=$a
fi

for ((i = min; i > 0; i--)); do
    d=$((min % i))
    if ((d == 0)); then
        d=$((max % i))
        if ((d == 0)); then
            echo "GCD is: $i"
            break
        fi
    fi
done

