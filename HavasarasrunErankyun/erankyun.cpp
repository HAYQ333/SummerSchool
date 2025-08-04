#include <iostream>

int main()
{
    int N;
    char S;
    
    std::cout<<"N=";
    std::cin>>N;
    std::cout<<"S=";
    std::cin>>S;
    //base'
    int d=N/2;
    int r=N%2;//mnacwrd
    int N_=d+r;//toxeri tiv
    int a=(r==0?1:0);//terner
   for (int i=0; i<N_; i++){
        int n=N_-i-1;//ankyunagic
        for (int j=0; j<n; j++){
            std::cout<<" "; 
        }
        for (int j=n; j<N_+i+a; j++){
            std::cout<<S; 
        }
        std::cout<<"\n";
    }
    //height
    for (int i=0; i<N; i++){
        int n=N-i-1;//ankyunagic
        for (int j=0; j<n; j++){
            std::cout<<" "; 
        }
        for (int j=n; j<N+i; j++){
            std::cout<<S; 
        }
        std::cout<<"\n";
    }

    return 0;
}
