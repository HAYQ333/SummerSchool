#include <iostream>
#include <cmath>
std::string NumToBinString(int n){
    std::string str="";
    while(n>=1){
        int r=n%2;
        str=std::to_string(r)+str;
        n=n/2;
    }
    return str;
}
std::string fillZeroes(std::string str, std::size_t siz){
    std::size_t s=siz-str.length();
    for(std::size_t i=0;i<s;i++){
        str="0"+str;
    }
    return str;
}
void print(int n){
    double N=pow(2,n);
    for(int i=0;i<N;i++){
        std::string str=NumToBinString(i);
        str=fillZeroes(str,n);
        std::cout<<str<<"\n";
    }
}
int main()
{
    print(5);
    return 0;
}
