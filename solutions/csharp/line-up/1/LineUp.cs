public static class LineUp
{
    public static string Format(string name, int number)
    {

        string number_str = Convert.ToString(number);
        if(number_str.Length != 1)
        {
            string number_str_end2 = number_str.Substring(number_str.Length-2, 2);
            if (number_str_end2 == "11" || number_str_end2 == "12" || number_str_end2 == "13")
            {
                return FormatOutput(name, $"{number_str}th");
            }
        }
        
        

        string number_str_end1 = number_str.Substring(number_str.Length-1, 1);

        if(number_str_end1 == "1")
        {
            return FormatOutput(name, $"{number_str}st");
        }
        if(number_str_end1 == "2")
        {
            return FormatOutput(name, $"{number_str}nd");
        }
        if(number_str_end1 == "3")
        {
            return FormatOutput(name, $"{number_str}rd");
        }
        return FormatOutput(name, $"{number_str}th");
    }
    public static string FormatOutput(string name, string number_with_order)
    {
        return $"{name}, you are the {number_with_order} customer we serve today. Thank you!";    }
}
