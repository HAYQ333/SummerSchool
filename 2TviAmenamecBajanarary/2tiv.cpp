#include <iostream>

int main()
{
    int a,b;
    int max,min;
    std::cout<<"a "; 
    std::cin>>a;
    std::cout<<"b ";
    std::cin>>b;
    if (a>b){
        max = a;
        min = b;
        
    }
    else {
        max = b;
        min = a;
        
    }
    for (int i = min; i>0; i--){
        if (min%i==0 && max%i==0){
            std::cout<<"answer: " << i;
            return 0;
        }
    }
    return 0;
}
