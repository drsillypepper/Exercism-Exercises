using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;

public static class LogAnalysis 
{
    // TODO: define the 'SubstringAfter()' extension method on the `string` type
    public static string SubstringAfter(this string str, string match)
    {
        int index = str.IndexOf(match);
        if(index == -1)
        {
            return "Not found";
        }
        int afterIndex = index + match.Length;
        return str.Substring(afterIndex);
    }
    // TODO: define the 'SubstringBetween()' extension method on the `string` type
    public static string SubstringBetween(this string str, string start, string end)
    {
        string startOfStr = str.SubstringAfter(start);
        int endIndex = startOfStr.IndexOf(end);
        return startOfStr.Substring(0, endIndex);
    }
    // TODO: define the 'Message()' extension method on the `string` type
    public static string Message(this string str)
    {
        return str.SubstringAfter(": ");
    }

    // TODO: define the 'LogLevel()' extension method on the `string` type
    public static string LogLevel(this string str)
    {
        return str.SubstringBetween("[", "]");
    }
}