function log(fname, text, result){
           console.log( ${fname}, ${text}, ${result});
        }
        function testLS(a,b,x){
            let x_=linear_solver(a,b);
            if (x==x_) log("LS",'',true);
            else log("LS",${a},${b}, ${x}!=${x_}, false);
        }
        
        function testQS(a,b,c,x1,x2){
            let [x1_,x2_]=quadratic_solver(a,b,c);
            if (x1==x1_ && x2==x2_) log("QS",'',true);
            else log("QS", ${a},${b},${c}, ${x1}?${x1_},${x2}?${x2_}, false);
        }
        
        function testGCD(a,b,c){
            let c_=get_com_den(a,b);
            if(c==c_)log("GCD",'', true);
            else log("GCD",${a},${b}, ${c}!=${c_}, false);
        }
        
        function testSIN(x,y){
            let y_=sin(x);
            let t=y-y_;
            //ternery operator
            t=t<0?-t:t;
            if (t<0.000001) log("SIN",'', true);
            else log("SIN",${x}, ${y}!=${y_}, false);
        }
        
        function testPOW(x,n,y){
            let y_=pow(x,n);
            if (y==y_) log("POW",'', true);
            else log("POW",${x},${n}, ${y}!=${y_}, false);
        
        }
        
        function testfactorial(n,y){
            let y_=factorial(n)
            if (y==y_) log("factorial",'', true);
            else log("factorial", ${n}, ${y}!=${y_}, false)
            
        }
        
        function testAll(){
            //linear_solver
                testLS(0,0,false)
                testLS(1,0,0)
                testLS(0,1,false)
                testLS(1,1,-1)
                testLS(2,5,-2.5)
                testLS(-3,9,3)
                
            //quadratic_solver
                testQS(1, -5, 6, 3, 2)  
                testQS(1, 0, -4, 2, -2) 
                testQS(2, -8, 6, 3, 1)  
                testQS(1, -4, 4, 2, 2)
                testQS(1, -3, 0, 3, 0)  
                testQS(1, 0, -9, 3, -3) 
                testQS(1, 5, 0, 0, -5)  
                testQS(1, 1, -6, 2, -3)
                
            //get_com_den
                testGCD(48, 18, 6)
                testGCD(56, 42, 14)
                testGCD(17, 5, 1)
                testGCD(100, 75, 25)
                testGCD(0, 5, 5)
                testGCD(21, 14, 7)
                testGCD(81, 27, 27)
                testGCD(123456, 7890, 6)
                testGCD(0, 0, 0)
                testGCD(97, 89, 1)
                
            //sin(x)
                testSIN(0, 0)
                testSIN(Math.PI/6, 0.5)
                testSIN(Math.PI/4, Math.sqrt(2)/2)
                testSIN(Math.PI/3, Math.sqrt(3)/2)
                testSIN(Math.PI/2, 1)
                testSIN(Math.PI, 0)
                testSIN(3*Math.PI/2, -1)
                testSIN(2*Math.PI, 0)
                testSIN(-Math.PI/6, -0.5)
                testSIN(Math.PI/12, 0.2588190451) 
                
                //pow
                testPOW(2, 3, 8);  
                testPOW(3, 2, 9);   
                testPOW(2, 4, 16);  
                testPOW(-1, 0, 1);  
                testPOW(-1, 1, -1);
                testPOW(-1, 2, 1);  
                testPOW(-1, 3, -1);    
                
                //testfactorial
                testfactorial(5, 120);  
                testfactorial(3, 6);     
                testfactorial(0, 1);  
                
        }
        
        function linear_solver(a,b){
            if (a==0)return false;
            return -b/a; 
        }
        function quadratic_solver(a,b,c){
            let D=b*b-4*a*c;
            if (D<0)return [false,false];
            let x1=(-b+Math.sqrt(D))/(2*a);
            let x2=(-b-Math.sqrt(D))/(2*a);
            return [x1,x2];
        }
        function get_com_den(a,b){
            while (b!== 0) {
                [a, b] = [b, a % b];
            }
            return a;
        }
        function sin(x){
            let n=100;
            let y=0;
            for (let i=0; i<n; i++){

y += pow(-1,i)*pow(x,2*i+1)/factorial(2*i+1);
            }
            return y;
        }
        function pow(x,n){
            if(n==0) return 1;
            let y = x
            for (let i=1;i<n;i++){
                y *=x;
            }
            return y;
        }
        
        function factorial(n) {
             if (n === 0 || n === 1) {
               return 1;
             }
             let y = 1;
             for (let i = 2; i <= n; i++) {
               y *= i;
             }
             return y;
        }
        testAll();
