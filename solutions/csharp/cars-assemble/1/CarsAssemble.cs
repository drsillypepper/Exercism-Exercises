static class AssemblyLine
{
    public static double SuccessRate(int speed)
    {
        double success_rate = 0f;
        if(1 <= speed && speed <= 4){
            success_rate = 1.00;
        }
        else if(5 <= speed && speed <= 8){
            success_rate = 0.9;
        }
        else if(speed == 9){
            success_rate = 0.8;
        }
        else if(speed == 10){
            success_rate = 0.77;
        }
        return success_rate;
    }
    
    public static double ProductionRatePerHour(int speed)
    {
        return 221 * speed * SuccessRate(speed);
    }

    public static int WorkingItemsPerMinute(int speed)
    {
        return (int)ProductionRatePerHour(speed)/60;
    }
}
