using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class LevelLoader : MonoBehaviour
{
    public Slider slider;

    public void Carga (int id)
    {
        StartCoroutine(Cargar(id));
    }
    public IEnumerator Cargar(int id)
    {
       
       while (true)
        {
            if (slider.value != slider.maxValue)
            {
                
                slider.value += 0.2f;
                yield return new WaitForSeconds(1);
            }
            else
            {
                SceneManager.LoadScene(id);
                break;
            }
        }
        
    }
}
